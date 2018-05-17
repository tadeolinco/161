import { Engine, Scene } from 'babylonjs'
import { createWalls } from './walls'
import { createPlatforms } from './platforms'
import { createCamera, updateCamera } from './camera'
import { createLights } from './lights'
import { createStrings } from './strings'
import { createGun } from './gun'
import { addListeners } from './listeners'
import { updateBullets } from './bullet'

// https://doc.babylonjs.com/babylon101/first
const canvas = document.getElementById('canvas')

const engine = new Engine(canvas, true)
engine.isPointerLock = true

const scene = new Scene(engine)
createCamera(scene)
createStrings(scene)
createPlatforms(scene)
createLights(scene)
createWalls(scene)
createGun(scene)
addListeners(scene)

let then = Date.now()
scene.registerAfterRender(() => {
  const now = Date.now()
  const delta = (now - then) / 1000
  updateCamera(scene)
  updateBullets(scene, delta)
  then = now
})

engine.runRenderLoop(() => {
  scene.render()
})
