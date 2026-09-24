const grid = document.querySelector('#gallery-grid');
const count = document.querySelector('#gallery-count');
const empty = document.querySelector('#gallery-empty');
const filters = {type: 'all', metal: 'all'};
const fallback = ['var(--clay)', '#8b897d', '#b19875', '#788379', '#9e7359'];
function renderGallery() {
  const shown = galleryItems.filter(item =>
    (filters.type === 'all' || item.type === filters.type) &&
    (filters.metal === 'all' || item.metals.includes(filters.metal))
  );
  grid.replaceChildren();
  shown.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    const visual = document.createElement('div');
    visual.className = 'gallery-visual';
    if (item.image) {
      const img = document.createElement('img');
      img.src = `assets/gallery/${encodeURIComponent(item.image)}`;
      img.alt = item.alt || item.title;
      img.loading = 'lazy';
      visual.append(img);
    } else {
      visual.classList.add('gallery-placeholder');
      visual.style.setProperty('--placeholder-tone', fallback[index % fallback.length]);
      const symbol = document.createElement('span');
      symbol.setAttribute('aria-hidden', 'true');
      symbol.textContent = '◌';
      visual.append(symbol);
      const note = document.createElement('span');
      note.className = 'photo-note';
      note.textContent = 'PHOTO COMING SOON';
      visual.append(note);
    }
    const label = document.createElement('span');
    label.className = 'gallery-type';
    label.textContent = item.type;
    const title = document.createElement('h2');
    title.textContent = item.title;
    const description = document.createElement('p');
    description.textContent = item.description;
    const metals = document.createElement('p');
    metals.className = 'gallery-metals';
    metals.textContent = item.metals.join(' · ');
    card.append(visual, label, title, description, metals);
    grid.append(card);
  });
  count.textContent = `Showing ${shown.length} of ${galleryItems.length} pieces`;
  empty.hidden = shown.length !== 0;
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const group = button.dataset.filter;
  filters[group] = button.dataset.value;
  document.querySelectorAll(`[data-filter="${group}"]`).forEach(el => {
    const active = el === button;
    el.classList.toggle('active', active);
    el.setAttribute('aria-pressed', String(active));
  });
  renderGallery();
}));
renderGallery();
