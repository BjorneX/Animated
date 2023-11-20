import * as THREE from "three";

//3 basics
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CapsuleGeometry(1, 1.5, 4, 8);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const capsule = new THREE.Mesh(geometry, material);
scene.add(capsule);

camera.position.z = 5;

document.querySelector("body").addEventListener("click", animate);

let cars = ["Bmw"];

function animate() {
  requestAnimationFrame(animate);
  capsule.rotation.x += 0.01;
  capsule.rotation.y += 0.01;
  cars.push();
  renderer.render(scene, camera);
}
animate();

hejhej;
