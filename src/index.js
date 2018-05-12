import { Engine, Scene } from 'babylonjs'
import { createWalls } from './walls'
import { createCamera, updateCamera } from './camera'
import { createLight } from './light'

// https://doc.babylonjs.com/babylon101/first

const canvas = document.getElementById('canvas')

const engine = new Engine(canvas, true)
engine.isPointerLock = true

const scene = new Scene(engine)
createCamera(scene)
createLight(scene)
createWalls(scene)

engine.runRenderLoop(() => {
  updateCamera(scene)
  scene.render()
})
