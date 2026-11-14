(() => {
  const data = window.DZB_CONTENT || { games: [], products: [], news: [] };
  const gamesGrid = document.querySelector("#gamesGrid");
  const productsGrid = document.querySelector("#productsGrid");
  const newsList = document.querySelector("#newsList");

  function renderGames(filter = "all") {
    const list = data.games.filter(game => filter === "all" || game.category === filter);
    gamesGrid.innerHTML = list.length ? list.map(game => `
      <article class="game-card">
        <div class="game-art" style="--art:${game.art || "linear-gradient(135deg,#233c73,#15172d)"}">
          <span class="game-badge">${escapeHTML(game.status || "ИГРА")}</span>
          <div class="art-orb">${escapeHTML(game.symbol || "DZB")}</div>
        </div>
        <div class="card-body">
          <div class="card-topline"><h3>${escapeHTML(game.title)}</h3><span class="tag">${game.category === "browser" ? "БРАУЗЕР" : "СКОРО"}</span></div>
          <p>${escapeHTML(game.description)}</p>
          ${game.url ? `<a class="card-link" href="${safeURL(game.url)}">Играть <span>→</span></a>` : `<span class="card-link">${escapeHTML(game.button || "Скоро")} <span>↗</span></span>`}
        </div>
      </article>`).join("") : `<div class="empty-state">В этой категории пока нет игр.</div>`;
  }

  function renderProducts() {
    productsGrid.innerHTML = data.products.map(product => `
      <article class="product-card">
        <div class="product-art" style="--art:${product.art || "linear-gradient(135deg,#31275e,#1b2343)"}"><span class="product-icon">${escapeHTML(product.icon || "✦")}</span></div>
        <div class="card-body">
          <div class="card-topline"><h3>${escapeHTML(product.title)}</h3><span class="tag">${escapeHTML(product.type || "РЕСУРС")}</span></div>
          <p>${escapeHTML(product.description)}</p>
          <div class="card-topline"><span class="product-price">${escapeHTML(product.price || "Скоро")}</span><span class="card-link">Подробнее ↗</span></div>
        </div>
      </article>`).join("");
  }

  function renderNews() {
    newsList.innerHTML = data.news.map(item => `
      <article class="news-item">
        <div class="news-date">${escapeHTML(item.date || "")}</div>
        <div><h3>${escapeHTML(item.title || "")}</h3><p>${escapeHTML(item.text || "")}</p></div>
        <span class="news-arrow">↗</span>
      </article>`).join("");
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
  }
  function safeURL(value) {
    try {
      const url = new URL(value, window.location.href);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
    } catch { return "#"; }
  }

  document.querySelector("#gameFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderGames(button.dataset.filter);
  });

  const menuToggle = document.querySelector("#menuToggle");
  const nav = document.querySelector("#mainNav");
  menuToggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));

  document.querySelector("#year").textContent = new Date().getFullYear();
  renderGames();
  renderProducts();
  renderNews();
})();
