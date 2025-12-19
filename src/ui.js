import * as THREE from "three";
import { getElement, getCategoryClass, elementsData } from "./data.js";
import { renderAtom, state } from "./atom.js";
import { camera, controls } from "./scene.js";

// Import Components
import { getNavbarHTML } from "./components/navbar.js";
import { getPropertiesPanelHTML } from "./components/properties.js";
import { getVisualsPanelHTML } from "./components/visuals.js";
import { getDrawerHTML } from "./components/drawer.js";

// Global UI Object
let ui = {
  nav: {},
  prop: {},
  visual: {},
  drawer: {},
};

function renderComponents() {
  const appContainer = document.getElementById("app-ui");
  if (!appContainer) return;

  appContainer.innerHTML = [
    getNavbarHTML(),
    '<div class="relative w-full max-w-7xl mx-auto px-4 pointer-events-none">',
    getPropertiesPanelHTML(),
    getVisualsPanelHTML(),
    '</div>',
    getDrawerHTML()
  ].join("");
}

function togglePanel(panelId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const isVisible = panel.classList.contains("menu-visible");

  // Close all
  document.querySelectorAll(".menu-panel").forEach((p) => {
    p.classList.remove("menu-visible");
    p.classList.add("menu-hidden");
  });

  if (!isVisible) {
    panel.classList.remove("menu-hidden");
    panel.classList.add("menu-visible");
  }
}

function toggleDrawer(show) {
  if (!ui.drawer.el) return;
  if (show) ui.drawer.el.classList.remove("translate-y-[110%]");
  else ui.drawer.el.classList.add("translate-y-[110%]");
}

export function selectElement(z) {
  const data = getElement(z);
  const catClass = getCategoryClass(data.c);

  // Update Navbar
  if (ui.nav.name) ui.nav.name.textContent = data.n;
  if (ui.nav.symbol) ui.nav.symbol.textContent = data.s;
  if (ui.nav.number) ui.nav.number.textContent = `#${data.z}`;
  if (ui.nav.category) ui.nav.category.textContent = data.c;

  // Reset Icon classes
  if (ui.nav.icon) {
    ui.nav.icon.className = `w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300 ${catClass}`;
  }

  // Update Properties Panel
  if (ui.prop.mass) ui.prop.mass.textContent = `${data.m} u`;
  if (ui.prop.config) ui.prop.config.textContent = data.conf;
  if (ui.prop.phase) ui.prop.phase.textContent = data.phase;
  if (ui.prop.en) ui.prop.en.textContent = data.en;
  if (ui.prop.desc) ui.prop.desc.textContent = data.desc;

  // Render 3D
  renderAtom(z);
}

export function initGrid() {
  if (!ui.drawer.grid || !ui.drawer.list) return;

  const frag = document.createDocumentFragment();
  for (let z = 1; z <= 118; z++) {
    const el = getElement(z);
    const div = document.createElement("div");
    div.className =
      "pt-cell bg-slate-100 hover:bg-white border border-slate-200";

    // Colorize border
    const catClass = getCategoryClass(el.c);
    if (el.c.includes("Alkali"))
      div.classList.add("border-red-200", "bg-red-50");
    if (el.c.includes("Noble"))
      div.classList.add("border-indigo-200", "bg-indigo-50");

    div.innerHTML = `<span class="pt-number text-slate-400">${z}</span><span class="pt-symbol font-bold text-slate-700">${el.s}</span>`;
    div.onclick = () => {
      selectElement(z);
      toggleDrawer(false);
    };
    frag.appendChild(div);
  }
  ui.drawer.grid.style.display = "grid";
  ui.drawer.grid.className = "grid grid-cols-6 sm:grid-cols-10 gap-2";
  ui.drawer.grid.innerHTML = "";
  ui.drawer.grid.appendChild(frag);

  // Mobile List
  const mFrag = document.createDocumentFragment();
  for (let z = 1; z <= 118; z++) {
    const el = getElement(z);
    const btn = document.createElement("button");
    btn.className =
      "bg-white p-2 rounded border border-slate-100 text-left text-sm flex items-center gap-2";
    btn.innerHTML = `<span class="font-bold text-blue-500 w-5">${z}</span> ${el.n}`;
    btn.onclick = () => {
      selectElement(z);
      toggleDrawer(false);
    };
    mFrag.appendChild(btn);
  }
  ui.drawer.list.appendChild(mFrag);
}

export function initUI() {
  // 1. Render Components first
  renderComponents();

  // 2. Populate UI References
  ui = {
    nav: {
      icon: document.getElementById("nav-icon"),
      symbol: document.getElementById("nav-symbol"),
      name: document.getElementById("nav-name"),
      number: document.getElementById("nav-number"),
      category: document.getElementById("nav-category"),
    },
    prop: {
      panel: document.getElementById("panel-properties"),
      mass: document.getElementById("prop-mass"),
      config: document.getElementById("prop-config"),
      phase: document.getElementById("prop-phase"),
      en: document.getElementById("prop-electroneg"),
      desc: document.getElementById("prop-desc"),
    },
    visual: {
      panel: document.getElementById("panel-visuals"),
      btnExplode: document.getElementById("btn-explode"),
      btnSpin: document.getElementById("btn-spin"),
      zoomSlider: document.getElementById("zoom-slider"),
      zoomVal: document.getElementById("zoom-val"),
    },
    drawer: {
      el: document.getElementById("drawer-table"),
      grid: document.getElementById("pt-grid"),
      list: document.getElementById("mobile-list"),
      search: document.getElementById("element-search"),
    },
  };

  // 3. Setup Listeners
  const btnProp = document.getElementById("btn-properties");
  if (btnProp) btnProp.onclick = () => togglePanel("panel-properties");

  const btnVis = document.getElementById("btn-visuals");
  if (btnVis) btnVis.onclick = () => togglePanel("panel-visuals");

  const btnTable = document.getElementById("btn-table");
  if (btnTable) btnTable.onclick = () => toggleDrawer(true);

  const closeDrawer = document.getElementById("close-drawer");
  if (closeDrawer) closeDrawer.onclick = () => toggleDrawer(false);

  document.querySelectorAll(".close-panel").forEach(
    (b) =>
      (b.onclick = (e) => {
        e.target.closest(".menu-panel").classList.remove("menu-visible");
        e.target.closest(".menu-panel").classList.add("menu-hidden");
      }),
  );

  // Search
  if (ui.drawer.search) {
    ui.drawer.search.addEventListener("input", (e) => {
      const val = e.target.value.toLowerCase();
      const found = elementsData.find(
        (el) =>
          el.n.toLowerCase().includes(val) ||
          el.s.toLowerCase() === val ||
          el.z.toString() === val,
      );
      if (found) {
        selectElement(found.z);
      }
    });
  }

  // --- VISUAL CONTROLS HANDLERS ---
  if (ui.visual.btnExplode) {
    ui.visual.btnExplode.onclick = function () {
      state.exploded = !state.exploded;
      this.textContent = state.exploded ? "Implode" : "Explode";
      this.classList.toggle("bg-blue-600");
      this.classList.toggle("text-white");
    };
  }

  if (ui.visual.btnSpin) {
    ui.visual.btnSpin.onclick = function () {
      state.spin = !state.spin;
      this.classList.toggle("bg-blue-100");
    };
  }

  // Zoom Slider Logic
  if (ui.visual.zoomSlider && ui.visual.zoomVal) {
    ui.visual.zoomSlider.oninput = function () {
      const dist = parseFloat(this.value);
      const vec = new THREE.Vector3().subVectors(
        camera.position,
        controls.target,
      );
      vec.setLength(dist);
      camera.position.copy(vec.add(controls.target));
      ui.visual.zoomVal.textContent = dist.toFixed(1);
    };

    // Sync Slider with OrbitControls (Mouse Wheel)
    controls.addEventListener("change", () => {
      const dist = camera.position.distanceTo(controls.target);
      ui.visual.zoomSlider.value = dist;
      ui.visual.zoomVal.textContent = dist.toFixed(1);
    });
  }

  document.querySelectorAll(".orbital-toggle").forEach((b) => {
    b.onclick = () => {
      const t = b.dataset.type;
      state.orbitals[t] = !state.orbitals[t];
      b.classList.toggle("opacity-50");
      b.classList.toggle("line-through");
    };
  });
}