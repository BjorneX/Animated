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
//renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(600, 375);
document.body.appendChild(renderer.domElement);

/*
const geometry = new THREE.CapsuleGeometry(1, 3, 4, 8);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const capsule = new THREE.Mesh(geometry, material);
scene.add(capsule);
*/

var xDistance = 50;
var zDistance = 30;
var geometry = new THREE.CapsuleGeometry(1, 3, 8);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff44 });

//initial offset so does not start in middle.
var xOffset = -80;

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 3; j++) {
    var capsule = new THREE.Mesh(geometry, material);
    capsule.position.x = (xDistance * i) + xOffset;
    capsule.position.z = (zDistance * j);

    scene.add(capsule);
  }
};

camera.position.set(0, 50, 150);
camera.lookAt(scene.position);

document.querySelector("body").addEventListener("click", animate);;

function animate() {
  requestAnimationFrame(animate);

  capsule.rotation.x += 0.01;

  renderer.render(scene, camera);
}
animate();
