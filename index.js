var html = require('bel');
var Babylon = require('babylonjs/babylon.max');
var BABYLON = Babylon;
var Engine = Babylon.Engine;
var Scene = Babylon.Scene;
var canvasStyle = `
	width: 100%;
	height: 100%;
	top: 0;
	left:0;
	position: absolute;	
`;
var canvas = html`<canvas style=${canvasStyle}></canvas>`;
document.body.appendChild(canvas);
var engine = new Engine(canvas, true);
var scene = new Scene(engine);


	// create a FreeCamera, and set its position to (x:0, y:5, z:-10)
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);

    // target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // attach the camera to the canvas
    camera.attachControl(canvas, false);

    // create a basic light, aiming 0,1,0 - meaning, to the sky
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

    // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

    // move the sphere upward 1/2 of its height
    sphere.position.y = 1;

    // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
    var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener('resize', function() {
    engine.resize();
});

