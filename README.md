# Deb Collins Art Jewelry

A responsive static website with home, filterable gallery, and artist statement pages. No framework or build step is needed. The supplied Deb Collins logo files are included in `assets/`.

## Preview

Open `index.html` in a browser. The gallery also works directly as a local file. To use a local web server, run `python3 -m http.server 8000` inside this folder and visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a new GitHub repository, such as `deb-collins-jewelry`.
2. Upload **the contents of this folder** to the repository root, then commit the files. `index.html` must be in the root, not inside another folder.
3. In repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. Find the live URL on the Pages settings screen. A project site normally appears at `https://YOUR-USERNAME.github.io/deb-collins-jewelry/`.

All links and asset paths are relative, so the site works at a GitHub Pages project URL. You can later connect your own domain using GitHub Pages settings and your registrar's DNS controls.

## Add jewelry to the gallery

The editable catalog is `gallery-data.js`. It currently contains ten starter entries based on pieces Deb has described. **Check the titles and details before publishing.** The gallery currently shows labeled image placeholders; it does not claim those images depict the jewelry.

1. Copy a photo, ideally a compressed JPG or WebP, to `assets/gallery/`.
2. Find its entry in `gallery-data.js` and set `image: "your-photo.jpg"`. Add a specific `alt` description, such as `alt: "Hammered silver pendant with a round moonstone"`.
3. Edit `title` and `description` in the same entry. Keep the description short for the grid.
4. Set `type` to one of `"earrings"`, `"necklaces"`, `"bracelets"`, or `"objects"`.
5. Set `metals` to an array containing any applicable values: `"sterling silver"`, `"copper"`, and/or `"brass"`. A mixed-metal piece can appear under multiple metal filters.
6. Copy an entire `{ ... }` entry to add another piece. Separate entries with commas. There is no fixed item limit; the layout shows five columns on wide screens and fewer on smaller screens.

Example:

```js
{ title: "Sea Glass Earrings", description: "Forged silver with blue enamel.", type: "earrings", metals: ["sterling silver", "copper"], image: "sea-glass-earrings.jpg", alt: "Blue enamel earrings hanging from forged sterling silver wires" },
```

The category and metal filters work together. `gallery.js` renders the cards safely from the entries in `gallery-data.js`.

## Other edits

- `artist.html` contains a draft artist statement and process text for Deb to review.
- `index.html` has links to the gallery, artist page, shop (`https://debrcollins.square.site/`), and website (`https://debrcollins.com/`). Update these if needed.
- The home page's abstract jewelry art and landscape are illustrations. Replace them with your own photography if desired.
- The site uses Google Fonts with local fallbacks.
