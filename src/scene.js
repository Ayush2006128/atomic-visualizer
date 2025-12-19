import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const container = document.getElementById("canvas-container");
if (typeof THREE === "undefined") {
  container.innerHTML = "Error: Three.js failed to load.";
}

export const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xf0f4f8, 0.02);

export const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(0, 0, 18); // Centered view

export const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
container.appendChild(renderer.domElement);

export const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.minDistance = 5;
controls.maxDistance = 50;

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 0.8));
const pl = new THREE.PointLight(0xffffff, 1);
pl.position.set(10, 10, 10);
scene.add(pl);

// Atom Group
export const atomGroup = new THREE.Group();
scene.add(atomGroup);
