// Run against the static preview: SITE_URL=http://127.0.0.1:8012 node tests/site-smoke.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const base = process.env.SITE_URL || 'http://127.0.0.1:8012';
const paths = ['/', '/404.html', ...fs.readdirSync(path.join(root, 'games')).map(x => `/games/${x}/`), '/metawinners-tennis/about/'];

(async () => {
  const browser = await chromium.launch({
    ...(process.env.BROWSER_EXECUTABLE_PATH ? { executablePath: process.env.BROWSER_EXECUTABLE_PATH } : {}),
    headless: true,
  });
  try {
    for (const width of process.env.FULLSCREEN_ONLY ? [] : [1280, 390, 320]) {
      const context = await browser.newContext({ viewport: { width, height: 800 } });
      // Keep legacy redirects inside the preview; the canonical URLs stay public.
      await context.route('https://avp86fr-jpg.github.io/**', route => {
        const url = new URL(route.request().url());
        if (route.request().isNavigationRequest() && fs.existsSync(path.join(root, url.pathname, 'index.html'))) {
          return route.fulfill({ status: 302, headers: { location: base + url.pathname + url.search + url.hash } });
        }
        return route.continue();
      });
      for (const pathname of paths) {
        const page = await context.newPage();
        const errors = [], failures = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('response', response => { if (response.status() >= 400) failures.push(response.url()); });
        await page.goto(base + pathname);
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 600) {
            scrollTo(0, y);
            await new Promise(resolve => setTimeout(resolve, 20));
          }
          await document.fonts.ready;
          await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
        });
        const layout = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > innerWidth,
          clipped: [...document.querySelectorAll('h1,h2,.btn,.hero__cta,.gp-hero__copy')].filter(element => {
            const rect = element.getBoundingClientRect();
            return rect.right > innerWidth + 1 || rect.left < -1;
          }).map(element => element.textContent.trim()),
          brokenImages: [...document.images].filter(image => !image.naturalWidth).map(image => image.src),
        }));
        const label = `${pathname} at ${width}px`;
        assert.deepEqual(errors, [], `${label}: JavaScript errors`);
        assert.deepEqual(failures, [], `${label}: HTTP failures`);
        assert.equal(layout.overflow, false, `${label}: horizontal overflow`);
        assert.deepEqual(layout.clipped, [], `${label}: clipped headings or controls`);
        assert.deepEqual(layout.brokenImages, [], `${label}: broken images`);
        if (pathname === '/') {
          for (const chip of await page.locator('.chip').all()) {
            await chip.click();
            const expected = Number(await chip.locator('span').textContent());
            assert.equal(await page.locator('#games .card[data-genres]:not(.card--more):visible').count(), expected);
            assert.equal(await page.locator('#count').textContent(), `${expected} game${expected === 1 ? '' : 's'} shown`);
            assert.equal(await page.locator('.chip[aria-pressed="true"]').count(), 1);
          }
        }
        await page.close();
      }
      await context.close();
      console.log(`Passed ${paths.length} pages at ${width}px, including all catalogue filters.`);
    }

    // Exercise fullscreen gestures without depending on OS fullscreen support.
    const context = await browser.newContext();
    const page = await context.newPage();
    async function setup(attributes = '') {
      await page.route('**/fullscreen-test?fs=1', route => route.fulfill({
        contentType: 'text/html',
        body: `<html><body><button id="play">Play</button><input id="name"><script src="/metawinners-skate/fs-toggle.js" ${attributes}></script></body></html>`,
      }));
      await page.addInitScript(() => {
        window.requests = 0; window.locks = []; window.unlocks = 0;
        Element.prototype.requestFullscreen = () => { window.requests++; return Promise.reject(new Error('Test fallback')); };
        screen.orientation.lock = value => { window.locks.push(value); return Promise.resolve(); };
        screen.orientation.unlock = () => { window.unlocks++; };
      });
      await page.goto(base + '/fullscreen-test?fs=1');
    }
    await setup();
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => requests), 0, 'Tab must not enter fullscreen');
    await page.keyboard.press('f');
    await page.waitForFunction(() => document.documentElement.classList.contains('mw-fs-fallback'));
    assert.equal(await page.evaluate(() => requests), 1, 'F must enter only once');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#mw-fs-btn').getAttribute('aria-pressed'), 'false');
    await page.locator('#play').click();
    assert.equal(await page.evaluate(() => requests), 1, 'Exiting must disarm auto-fullscreen');

    await setup('data-no-f="1" data-orientation="portrait"');
    assert.equal(await page.locator('#mw-fs-btn').getAttribute('title'), 'Enter full screen');
    await page.locator('#mw-fs-btn').click();
    await page.waitForFunction(() => document.documentElement.classList.contains('mw-fs-fallback'));
    assert.deepEqual(await page.evaluate(() => locks), ['portrait']);
    await page.locator('#mw-fs-btn').click();
    await page.locator('#play').click();
    assert.equal(await page.evaluate(() => requests), 1, 'Button must disarm auto-fullscreen');
    assert.equal(await page.locator('#mw-fs-btn').getAttribute('aria-pressed'), 'false');
    await context.close();
    console.log('Passed fullscreen shortcut, fallback, exit, portrait and first-gesture regressions.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
