# Deb Collins Art Jewelry

A responsive, static portfolio site. No build step or framework required.

## Preview

Open `index.html` in a browser. For a local server, run `python3 -m http.server 8000` inside this folder and visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository, such as `deb-collins-jewelry`.
2. Upload the contents of this folder to the repository root (or push them with Git). Commit the files.
3. Open repository **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)` and save.
4. GitHub will show the live URL on the Pages settings screen. A project repository usually appears at `https://YOUR-USERNAME.github.io/deb-collins-jewelry/`.

The site uses relative file paths, so it also works at a GitHub Pages project URL. To connect a custom domain later, follow GitHub's Pages custom-domain instructions and update your DNS at your domain registrar.

## Customize before publishing

- Change the shop URL (`https://debrcollins.square.site/`) and website URL (`https://debrcollins.com/`) in `index.html` if needed.
- The hero and collection panels are **illustrations**, not photographs of Deb's work. For each collection panel, add your own image to `assets/`, then replace its `<div class="jewel ...">...</div>` with `<img src="assets/YOUR-FILE.jpg" alt="A specific description of the jewelry">`. Add `.work-image img{width:100%;height:100%;object-fit:cover}` to `styles.css`.
- For a hero photograph, replace the `.hero-sculpture` element with an `<img>` and add similar sizing and `object-fit:cover` rules, or keep the abstract illustration.
- The artist copy is a starting draft. Check it for accuracy before publishing. No email or social account was assumed.
- The fonts load from Google Fonts; system font fallbacks are provided if that service is unavailable.
