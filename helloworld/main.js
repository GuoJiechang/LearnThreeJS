import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

function makeInstance(geometry, color, x) {
	const material = new THREE.MeshPhongMaterial({color});
   
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
   
	cube.position.x = x;
   
	return cube;
}

//cube instances
const cubes = [
	makeInstance(geometry, 0x44aa88,  0),
	makeInstance(geometry, 0x8844aa, -2),
	makeInstance(geometry, 0xaa8844,  2),
];

//light source
const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);


camera.position.z = 5;

function animate() {
	//Requests the browser to call the animate function before the next repaint, creating a smooth animation loop.
	requestAnimationFrame( animate );
	
	cubes.forEach((cube, ndx) => {
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
	  });

	renderer.render( scene, camera );
}

animate();