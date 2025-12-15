import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// --- 1. DATA AND STATE ---
const elementsData = [
  {
    z: 1,
    s: "H",
    n: "Hydrogen",
    m: 1.008,
    c: "Nonmetal",
    conf: "1s1",
    desc: "Lightest element, fuel of stars.",
    phase: "Gas",
    en: "2.20",
  },
  {
    z: 2,
    s: "He",
    n: "Helium",
    m: 4.0026,
    c: "Noble Gas",
    conf: "1s2",
    desc: "Inert gas, fills balloons.",
    phase: "Gas",
    en: "-",
  },
  {
    z: 3,
    s: "Li",
    n: "Lithium",
    m: 6.94,
    c: "Alkali Metal",
    conf: "[He] 2s1",
    desc: "Lightest metal, used in batteries.",
    phase: "Solid",
    en: "0.98",
  },
  {
    z: 4,
    s: "Be",
    n: "Beryllium",
    m: 9.0122,
    c: "Alkaline Earth Metal",
    conf: "[He] 2s2",
    desc: "Stiff, lightweight metal.",
    phase: "Solid",
    en: "1.57",
  },
  {
    z: 5,
    s: "B",
    n: "Boron",
    m: 10.81,
    c: "Metalloid",
    conf: "[He] 2s2 2p1",
    desc: "Essential for plant growth.",
    phase: "Solid",
    en: "2.04",
  },
  {
    z: 6,
    s: "C",
    n: "Carbon",
    m: 12.011,
    c: "Nonmetal",
    conf: "[He] 2s2 2p2",
    desc: "Basis of life and organic chemistry.",
    phase: "Solid",
    en: "2.55",
  },
  {
    z: 7,
    s: "N",
    n: "Nitrogen",
    m: 14.007,
    c: "Nonmetal",
    conf: "[He] 2s2 2p3",
    desc: "Makes up 78% of Earth's atmosphere.",
    phase: "Gas",
    en: "3.04",
  },
  {
    z: 8,
    s: "O",
    n: "Oxygen",
    m: 15.999,
    c: "Nonmetal",
    conf: "[He] 2s2 2p4",
    desc: "Essential for respiration.",
    phase: "Gas",
    en: "3.44",
  },
  {
    z: 9,
    s: "F",
    n: "Fluorine",
    m: 18.998,
    c: "Halogen",
    conf: "[He] 2s2 2p5",
    desc: "Most reactive element.",
    phase: "Gas",
    en: "3.98",
  },
  {
    z: 10,
    s: "Ne",
    n: "Neon",
    m: 20.18,
    c: "Noble Gas",
    conf: "[He] 2s2 2p6",
    desc: "Used in bright orange signs.",
    phase: "Gas",
    en: "-",
  },
  {
    z: 11,
    s: "Na",
    n: "Sodium",
    m: 22.99,
    c: "Alkali Metal",
    conf: "[Ne] 3s1",
    desc: "Component of table salt.",
    phase: "Solid",
    en: "0.93",
  },
  {
    z: 12,
    s: "Mg",
    n: "Magnesium",
    m: 24.305,
    c: "Alkaline Earth Metal",
    conf: "[Ne] 3s2",
    desc: "Burns with bright white light.",
    phase: "Solid",
    en: "1.31",
  },
  {
    z: 13,
    s: "Al",
    n: "Aluminium",
    m: 26.982,
    c: "Post-transition Metal",
    conf: "[Ne] 3s2 3p1",
    desc: "Lightweight, used in cans.",
    phase: "Solid",
    en: "1.61",
  },
  {
    z: 14,
    s: "Si",
    n: "Silicon",
    m: 28.085,
    c: "Metalloid",
    conf: "[Ne] 3s2 3p2",
    desc: "Semiconductor for chips.",
    phase: "Solid",
    en: "1.90",
  },
  {
    z: 15,
    s: "P",
    n: "Phosphorus",
    m: 30.974,
    c: "Nonmetal",
    conf: "[Ne] 3s2 3p3",
    desc: "Found in matches and DNA.",
    phase: "Solid",
    en: "2.19",
  },
  {
    z: 16,
    s: "S",
    n: "Sulfur",
    m: 32.06,
    c: "Nonmetal",
    conf: "[Ne] 3s2 3p4",
    desc: "Yellow solid, rotten egg smell.",
    phase: "Solid",
    en: "2.58",
  },
  {
    z: 17,
    s: "Cl",
    n: "Chlorine",
    m: 35.45,
    c: "Halogen",
    conf: "[Ne] 3s2 3p5",
    desc: "Disinfectant for pools.",
    phase: "Gas",
    en: "3.16",
  },
  {
    z: 18,
    s: "Ar",
    n: "Argon",
    m: 39.948,
    c: "Noble Gas",
    conf: "[Ne] 3s2 3p6",
    desc: "Used in lightbulbs.",
    phase: "Gas",
    en: "-",
  },
  {
    z: 19,
    s: "K",
    n: "Potassium",
    m: 39.098,
    c: "Alkali Metal",
    conf: "[Ar] 4s1",
    desc: "Crucial for nerve function.",
    phase: "Solid",
    en: "0.82",
  },
  {
    z: 20,
    s: "Ca",
    n: "Calcium",
    m: 40.078,
    c: "Alkaline Earth Metal",
    conf: "[Ar] 4s2",
    desc: "Essential for strong bones.",
    phase: "Solid",
    en: "1.00",
  },
  {
    z: 26,
    s: "Fe",
    n: "Iron",
    m: 55.845,
    c: "Transition Metal",
    conf: "[Ar] 4s2 3d6",
    desc: "Main component of steel and blood.",
    phase: "Solid",
    en: "1.83",
  },
  {
    z: 29,
    s: "Cu",
    n: "Copper",
    m: 63.546,
    c: "Transition Metal",
    conf: "[Ar] 4s1 3d10",
    desc: "Excellent electrical conductor.",
    phase: "Solid",
    en: "1.90",
  },
  {
    z: 47,
    s: "Ag",
    n: "Silver",
    m: 107.87,
    c: "Transition Metal",
    conf: "[Kr] 5s1 4d10",
    desc: "Highest electrical conductivity.",
    phase: "Solid",
    en: "1.93",
  },
  {
    z: 79,
    s: "Au",
    n: "Gold",
    m: 196.97,
    c: "Transition Metal",
    conf: "[Xe] 6s1 4f14 5d10",
    desc: "Highly malleable precious metal.",
    phase: "Solid",
    en: "2.54",
  },
  {
    z: 92,
    s: "U",
    n: "Uranium",
    m: 238.03,
    c: "Actinide",
    conf: "[Rn] 7s2 5f3 6d1",
    desc: "Fuel for nuclear reactors.",
    phase: "Solid",
    en: "1.38",
  },
];

function getElement(z) {
  const found = elementsData.find((e) => e.z === z);
  if (found) return found;
  return {
    z: z,
    s: "Xx",
    n: `Element ${z}`,
    m: z * 2,
    c: "Unknown",
    conf: "Unknown",
    desc: "Data not loaded.",
    phase: "-",
    en: "-",
  };
}

function getCategoryClass(cat) {
  if (cat.includes("Alkali")) return "cat-alkali";
  if (cat.includes("Alkaline")) return "cat-alkaline";
  if (cat.includes("Transition")) return "cat-transition";
  if (cat.includes("Post")) return "cat-post-transition";
  if (cat.includes("Metalloid")) return "cat-metalloid";
  if (cat.includes("Nonmetal")) return "cat-nonmetal";
  if (cat.includes("Noble")) return "cat-noble";
  if (cat.includes("Lanthanide")) return "cat-lanthanide";
  if (cat.includes("Actinide")) return "cat-actinide";
  return "cat-unknown";
}

// --- 2. UI CONTROLLER ---
const ui = {
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

// UI State
let activePanel = null;

function togglePanel(panelId) {
  const panel = document.getElementById(panelId);
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
  if (show) ui.drawer.el.classList.remove("translate-y-[110%]");
  else ui.drawer.el.classList.add("translate-y-[110%]");
}

// Event Listeners
document.getElementById("btn-properties").onclick = () =>
  togglePanel("panel-properties");
document.getElementById("btn-visuals").onclick = () =>
  togglePanel("panel-visuals");
document.getElementById("btn-table").onclick = () => toggleDrawer(true);
document.getElementById("close-drawer").onclick = () => toggleDrawer(false);
document.querySelectorAll(".close-panel").forEach(
  (b) =>
    (b.onclick = (e) => {
      e.target.closest(".menu-panel").classList.remove("menu-visible");
      e.target.closest(".menu-panel").classList.add("menu-hidden");
    }),
);

// Search
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

// Element Selection Logic
function selectElement(z) {
  const data = getElement(z);
  const catClass = getCategoryClass(data.c);

  // Update Navbar
  ui.nav.name.textContent = data.n;
  ui.nav.symbol.textContent = data.s;
  ui.nav.number.textContent = `#${data.z}`;
  ui.nav.category.textContent = data.c;

  // Reset Icon classes
  ui.nav.icon.className = `w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300 ${catClass}`;

  // Update Properties Panel
  ui.prop.mass.textContent = `${data.m} u`;
  ui.prop.config.textContent = data.conf;
  ui.prop.phase.textContent = data.phase;
  ui.prop.en.textContent = data.en;
  ui.prop.desc.textContent = data.desc;

  // Render 3D
  renderAtom(z);
}

// --- 3. THREE.JS & ATOM LOGIC ---
// (Standard Three.js Setup, centered camera)
const container = document.getElementById("canvas-container");
if (typeof THREE === "undefined") {
  container.innerHTML = "Error: Three.js failed to load.";
}

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xf0f4f8, 0.02);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(0, 0, 18); // Centered view

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.minDistance = 5;
controls.maxDistance = 50;

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 0.8));
const pl = new THREE.PointLight(0xffffff, 1);
pl.position.set(10, 10, 10);
scene.add(pl);

// Atom Group
const atomGroup = new THREE.Group();
scene.add(atomGroup);

let nucleusMesh = null;
let electronParticles = [];
let state = {
  exploded: false,
  spin: true,
  orbitals: { s: true, p: true, d: true, f: true },
};

// Colors
const COLORS = {
  nucleus: 0xffadc6,
  s: 0x6366f1,
  p: 0x10b981,
  d: 0xf43f5e,
  f: 0xd97706,
};

function clearAtom() {
  while (atomGroup.children.length > 0) {
    const c = atomGroup.children[0];
    if (c.geometry) c.geometry.dispose();
    if (c.material) c.material.dispose();
    atomGroup.remove(c);
  }
  electronParticles = [];
}

// --- LOGIC FROM PREVIOUS STEPS ---
function getElectronStructure(z) {
  // Simplified orbital filler
  let electrons = z;
  const shells = [
    { n: 1, l: "s", cap: 2 },
    { n: 2, l: "s", cap: 2 },
    { n: 2, l: "p", cap: 6 },
    { n: 3, l: "s", cap: 2 },
    { n: 3, l: "p", cap: 6 },
    { n: 4, l: "s", cap: 2 },
    { n: 3, l: "d", cap: 10 },
    { n: 4, l: "p", cap: 6 },
    { n: 5, l: "s", cap: 2 },
    { n: 4, l: "d", cap: 10 },
    { n: 5, l: "p", cap: 6 },
    { n: 6, l: "s", cap: 2 },
    { n: 4, l: "f", cap: 14 },
    { n: 5, l: "d", cap: 10 },
  ];
  const res = [];
  for (let s of shells) {
    if (electrons <= 0) break;
    const count = Math.min(electrons, s.cap);
    res.push({ n: s.n, l: s.l, count });
    electrons -= count;
  }
  return res;
}

function generateOrbitalPoints(n, l, count) {
  const pts = [];
  const density = 400;
  const scale = n * 1.5;
  for (let i = 0; i < density * (l === "s" ? 1 : l === "p" ? 3 : 5); i++) {
    let p = new THREE.Vector3();
    if (l === "s") {
      const u = Math.random(),
        v = Math.random();
      const theta = 2 * Math.PI * u,
        phi = Math.acos(2 * v - 1);
      const r = Math.pow(Math.random(), 1 / 3) * scale;
      p.setFromSphericalCoords(r, phi, theta);
    } else if (l === "p") {
      const axis = Math.floor(Math.random() * 3);
      const dist = Math.sqrt(Math.random()) * scale;
      const spread = 0.4 * dist * (Math.random() - 0.5);
      if (axis === 0)
        p.set(dist * (Math.random() > 0.5 ? 1 : -1), spread, spread);
      if (axis === 1)
        p.set(spread, dist * (Math.random() > 0.5 ? 1 : -1), spread);
      if (axis === 2)
        p.set(spread, spread, dist * (Math.random() > 0.5 ? 1 : -1));
    } else {
      const u = Math.random(),
        v = Math.random();
      const theta = 2 * Math.PI * u,
        phi = Math.acos(2 * v - 1);
      const r = Math.pow(Math.random(), 1 / 3) * scale;
      p.setFromSphericalCoords(r, phi, theta);
    }
    pts.push(p.x, p.y, p.z);
  }
  return pts;
}

function renderAtom(z) {
  clearAtom();
  // Nucleus
  const nGeo = new THREE.SphereGeometry(Math.log(z + 1) * 0.25 + 0.3, 32, 32);
  const nMat = new THREE.MeshPhysicalMaterial({
    color: COLORS.nucleus,
    roughness: 0.2,
    metalness: 0.1,
    emissive: COLORS.nucleus,
    emissiveIntensity: 0.4,
  });
  nucleusMesh = new THREE.Mesh(nGeo, nMat);
  atomGroup.add(nucleusMesh);

  // Orbitals
  const config = getElectronStructure(z);
  config.forEach((orb) => {
    const pts = generateOrbitalPoints(orb.n, orb.l, orb.count);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    const mat = new THREE.PointsMaterial({
      color: COLORS[orb.l] || COLORS.f,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
      blending: THREE.NormalBlending,
      sizeAttenuation: true,
    });
    const sys = new THREE.Points(geo, mat);
    sys.userData = { n: orb.n, l: orb.l };
    atomGroup.add(sys);
    electronParticles.push(sys);
  });
}

// --- VISUAL CONTROLS HANDLERS ---
ui.visual.btnExplode.onclick = function () {
  state.exploded = !state.exploded;
  this.textContent = state.exploded ? "Implode" : "Explode";
  this.classList.toggle("bg-blue-600");
  this.classList.toggle("text-white");
};
ui.visual.btnSpin.onclick = function () {
  state.spin = !state.spin;
  this.classList.toggle("bg-blue-100");
};

// Zoom Slider Logic
ui.visual.zoomSlider.oninput = function () {
  const dist = parseFloat(this.value);
  const vec = new THREE.Vector3().subVectors(camera.position, controls.target);
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

document.querySelectorAll(".orbital-toggle").forEach((b) => {
  b.onclick = () => {
    const t = b.dataset.type;
    state.orbitals[t] = !state.orbitals[t];
    b.classList.toggle("opacity-50");
    b.classList.toggle("line-through");
  };
});

// --- INITIALIZATION ---
// Populate Drawer Grid
function initGrid() {
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

// Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const time = clock.getElapsedTime();

  if (state.spin) {
    atomGroup.rotation.y += 0.002;
  }

  if (nucleusMesh) {
    const s = 1 + Math.sin(time * 3) * 0.03;
    nucleusMesh.scale.set(s, s, s);
  }

  electronParticles.forEach((sys) => {
    const { n, l } = sys.userData;
    sys.visible = state.orbitals[l];
    if (sys.visible) {
      const targetScale = state.exploded ? 2.5 : 1.0;
      sys.scale.setScalar(THREE.MathUtils.lerp(sys.scale.x, targetScale, 0.05));
      sys.rotation.y -= 0.001 * n;
    }
  });

  controls.update();
  renderer.render(scene, camera);
}

initGrid();
selectElement(6); // Start Carbon
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
