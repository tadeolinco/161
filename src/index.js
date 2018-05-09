/* 
  From example:
  https://doc.babylonjs.com/babylon101/first
*/

import {
  ArcRotateCamera,
  Engine,
  HemisphericLight,
  MeshBuilder,
  PointLight,
  Scene,
  Vector3,
} from 'babylonjs'

const canvas = document.getElementById('canvas')

const engine = new Engine(canvas, true)

const createScene = function() {
  // Create the scene space
  const scene = new Scene(engine)

  // Add a camera to the scene and attach it to the canvas
  const camera = new ArcRotateCamera(
    'Camera',
    Math.PI / 2,
    Math.PI / 2,
    2,
    Vector3.Zero(),
    scene
  )
  camera.attachControl(canvas, true)

  // Add lights to the scene
  const light1 = new HemisphericLight('light1', new Vector3(1, 1, 0), scene)
  const light2 = new PointLight('light2', new Vector3(0, 1, -1), scene)

  // Add and manipulate meshes in the scene
  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene)

  return scene
}

const scene = createScene()

engine.runRenderLoop(() => {
  scene.render()
})
