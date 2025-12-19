import * as THREE from "three";
import { atomGroup } from "./scene.js";

export const state = {
  exploded: false,
  spin: true,
  orbitals: { s: true, p: true, d: true, f: true },
};

const COLORS = {
  nucleus: 0xffadc6,
  s: 0x6366f1,
  p: 0x10b981,
  d: 0xf43f5e,
  f: 0xd97706,
};

let nucleusMesh = null;
let electronParticles = [];

function clearAtom() {
  while (atomGroup.children.length > 0) {
    const c = atomGroup.children[0];
    if (c.geometry) c.geometry.dispose();
    if (c.material) c.material.dispose();
    atomGroup.remove(c);
  }
  electronParticles = [];
  nucleusMesh = null;
}

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

export function renderAtom(z) {
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

export function animateAtom(time) {
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
}
