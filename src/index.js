import { Engine, Scene } from 'babylonjs'
import { createWalls } from './walls'
import { createCamera, updateCamera } from './camera'
import { createLight } from './light'
import { createGun } from './gun'
import { addListeners } from './listeners'

// https://doc.babylonjs.com/babylon101/first
const canvas = document.getElementById('canvas')

const engine = new Engine(canvas, true)
engine.isPointerLock = true

const scene = new Scene(engine)
createCamera(scene)
createLight(scene)
createWalls(scene)
createGun(scene)
addListeners(scene)

scene.registerAfterRender(() => {
  updateCamera(scene)
  const rotation = scene.cameras[0].rotation
})

engine.runRenderLoop(() => {
  scene.render()
})
