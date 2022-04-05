import './style.css';

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });
renderer.setSize(window.innerWidth, window.innerHeight);

//controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 20);
controls.update();


//object (geometry)
const geometry = new THREE.ConeGeometry(5, 10, 10);
const material = new THREE.MeshStandardMaterial({ color: 0xFFA8A8, });
const cone = new THREE.Mesh(geometry, material);
scene.add(cone);

//lighting
const ambiantLight = new THREE.AmbientLight(0xF6FFA4); // soft white light

const pointLight = new THREE.PointLight(0xffffff, 1, 100); //point light
pointLight.position.set(2, 2, 0);

scene.add(pointLight, ambiantLight);

//guide

//light-guide
const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);

//grid
const size = 100;
const divisions = 32;

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper, pointLightHelper);


camera.position.z = 20;

//render
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cone.rotation.x += 0.00;
    cone.rotation.y += 0.02;
    cone.rotation.z += 0.00;
}
animate();