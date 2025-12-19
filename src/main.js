import * as THREE from "three";
import { initUI, initGrid, selectElement } from "./ui.js";
import { animateAtom } from "./atom.js";
import { scene, camera, renderer, controls } from "./scene.js";

// Initialize UI
initUI();
initGrid();
selectElement(6); // Start Carbon

// Animation Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const time = clock.getElapsedTime();

  animateAtom(time);

  controls.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});