const money = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
});

const nav = document.querySelector("#categoryNav");
const navBar = document.querySelector(".category-nav");
const menu = document.querySelector("#menu");
const backTop = document.querySelector("#backTop");

let activeId = null;
let lockedId = null;
let settleTimer = null;
let ticking = false;

function renderNav() {
  nav.innerHTML = menuData.map(category => `
    <button class="category-btn"
      data-target="${category.id}"
      type="button">
      ${category.title}
    </button>
  `).join("");
}

function renderMenu() {
  menu.innerHTML = menuData.map(category => `
    <section class="category" id="${category.id}" data-category="${category.id}">
      <div class="category-heading" style="background-image: linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.84)), url('${category.image}')">
        <div class="category-heading__content">
          <h2 class="category-title">${category.title}</h2>
          <p class="category-subtitle">${category.subtitle}</p>
        </div>
      </div>
      <div class="items">
        ${category.items.map(item => `
          <article class="item">
            <div>
              ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
              <h3>${item.name}</h3>
              ${item.description ? `<p>${item.description}</p>` : ""}
            </div>
            <div class="price">${item.price ? money.format(item.price) : "Por definir"}</div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function setActive(id) {
  if (!id || id === activeId) return;
  activeId = id;

  const buttons = nav.querySelectorAll(".category-btn");
  buttons.forEach(button => {
    button.classList.toggle("active", button.dataset.target === id);
    button.setAttribute("aria-current", button.dataset.target === id ? "true" : "false");
  });

  const active = nav.querySelector(`.category-btn[data-target="${id}"]`);
  if (!active) return;

  const left = active.offsetLeft - (nav.clientWidth / 2) + (active.offsetWidth / 2);
  const max = nav.scrollWidth - nav.clientWidth;
  nav.scrollTo({ left: Math.min(Math.max(0, left), Math.max(0, max)), behavior: "smooth" });
}

function currentCategoryId() {
  const sections = document.querySelectorAll(".category");
  if (!sections.length) return null;

  const bottom = window.scrollY + window.innerHeight;
  const pageEnd = document.documentElement.scrollHeight - 2;
  if (bottom >= pageEnd) return sections[sections.length - 1].id;

  const line = window.scrollY + navBar.offsetHeight + 24;
  let current = sections[0].id;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top + window.scrollY;
    if (top <= line) current = section.id;
  });

  return current;
}

function syncActive() {
  if (lockedId) return;
  setActive(currentCategoryId());
}

function scheduleUnlock() {
  clearTimeout(settleTimer);
  settleTimer = setTimeout(() => {
    lockedId = null;
    syncActive();
  }, 160);
}

function goToCategory(id) {
  const section = document.getElementById(id);
  if (!section) return;

  const top = section.getBoundingClientRect().top + window.scrollY - navBar.offsetHeight - 10;

  lockedId = id;
  setActive(id);
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  scheduleUnlock();
}

nav.addEventListener("click", (event) => {
  const button = event.target.closest(".category-btn");
  if (!button) return;
  goToCategory(button.dataset.target);
});

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 550);

  if (lockedId) {
    scheduleUnlock();
    return;
  }

  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    syncActive();
  });
}, { passive: true });

window.addEventListener("resize", syncActive);
window.addEventListener("load", syncActive);

backTop.addEventListener("click", () => {
  lockedId = null;
  clearTimeout(settleTimer);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderNav();
renderMenu();
syncActive();
