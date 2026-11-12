# AVPNFT1 games — GitHub Pages

Static catalogue at https://avp86fr-jpg.github.io/. The site uses HTML, inlined CSS, local fonts and WebP images. No build or package installation is required.

## Edit the homepage

The current homepage is maintained directly in `index.html`. Update the relevant game card and its `VideoGame` entry in the JSON-LD together. The former `tools/build.py` and template files are not present in this repository. `assets/css/site.css` also supplies styles for other pages; the homepage has its own inlined styles.

Crown City links to the separately published `/crown-city/` game and `/crown-city/about/` page. Its homepage card uses the original After Hours cover exported at 960 and 1672 pixels, with HTML lettering above it. Updating the Crown City repository alone does not update this card. Preserve the cover's single-car composition.

When adding or removing games, update visible counts, category counts and JSON-LD. The catalogue currently contains 23 games. The existing two-minute arcade trailer is an earlier collection highlight reel.

## Preview and publish

Run `python3 -m http.server 8012` from this directory. Check the homepage on a narrow phone and a desktop, including category filters and the changed card's Play/About links. Production game links target their published locations.

GitHub Pages publishes the root of `main`. Keep the canonical URL, metadata, `sitemap.xml`, `robots.txt` and `404.html` consistent if the site address changes. TOURNAMENT referral links retain their sponsorship attributes and disclosure.


## MetaWinners Tennis Club

`/metawinners-tennis/` is the complete browser game. Its About page, 40-second 720p trailer, original launch art and media downloads are at `/metawinners-tennis/about/`. The homepage card and JSON-LD include Tennis Club as the 23rd game (5 Sports games). The video is H.264/AAC MP4 with fast-start metadata; it loads only on demand. No build is needed.
