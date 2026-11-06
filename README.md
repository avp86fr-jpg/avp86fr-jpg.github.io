# avpnft1 games: landing page (GitHub Pages)

Static site. Nothing to build for hosting: plain HTML with inlined CSS, ~2.5 KB vanilla JS, self-hosted fonts and WebP images.

## Change the site URL (canonical, og:url, og:image, JSON-LD, sitemap, robots)
1. Edit `SITE = "https://avp86fr-jpg.github.io/"` at the top of `tools/build.py`.
2. Run `python3 tools/build.py`. It regenerates `index.html`, `sitemap.xml`, `robots.txt` and `404.html`.
   No Python? Find and replace `https://avp86fr-jpg.github.io/` in those four files.

For a project repo (for example `https://avp86fr-jpg.github.io/games/`) instead of the user site repo `avp86fr-jpg.github.io`, also change the `/assets/...` and `/favicon.ico` paths in `tools/404.tpl.html`.

## Edit content
- Games (title, short description, genres, card label): the `GAMES` list in `tools/build.py`.
- Layout and copy: `tools/index.tpl.html`. Styles: `assets/css/site.css` (inlined into index.html by the build; 404.html links it).
- Covers: `assets/img/<itch-slug>-420.webp` and `-630.webp` (the itch 630x500 covers).

## Deploy
Push the contents of this folder to the root of the `avp86fr-jpg.github.io` repo, then open Settings → Pages → Deploy from branch `main`, folder `/ (root)`. You can delete `shots/` (QA screenshots and Lighthouse reports) before pushing. `tools/` does no harm if you leave it in.

## Notes
- METAWINNERS FLIP is playable at `games/metawinners-flip/` (the game itself). Its cover and hero banner are the local files in `assets/img/metawinners-flip/`.
- METAWINNERS SKATE keeps its published itch.io build. The site links to `https://avpnft1.itch.io/metawinners-skate` and does not host a second copy.
- Other "Play free" buttons open that game's itch.io page in a new tab. The 2-minute trailer stays the existing 14-game YouTube video.
- TOURNAMENT links use `rel="sponsored"` and carry the referral disclosure.
