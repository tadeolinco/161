import { Engine, Scene } from 'babylonjs'
import { createWalls } from './walls'
import { createCamera, updateCamera } from './camera'
import { createLight } from './light'
import { createGun } from './gun'
import { updateBullets, createBullet } from './bullet'
import { DIFFICULTY, RELOADING_TIME, NUM_BULLET } from './constants'

// https://doc.babylonjs.com/babylon101/first
const canvas = document.getElementById('canvas')
const bulletsText = document.getElementById('bullets')
const reloadingText = document.getElementById('reloading')
const pointsText = document.getElementById('points')

const engine = new Engine(canvas, true)
engine.isPointerLock = true

const scene = new Scene(engine)
createCamera(scene)
createLight(scene)
createWalls(scene)
createGun(scene)

const gameState = {
  isPlaying: false,
  points: 0,
  bullets: 10,
  reloading: false,
  difficulty: DIFFICULTY.EASY,
}

const setBullets = value => {
  gameState.bullets = value
  bulletsText.textContent = value
}

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    const camera = scene.cameras[0]
    if (gameState.isPlaying) {
      camera.detachControl(canvas)
      gameState.isPlaying = false
    }
  } else if (event.code === 'Space' && gameState.isPlaying) {
    reloadingText.hidden = false
    gameState.reloading = true
    setTimeout(() => {
      reloadingText.hidden = true
      gameState.reloading = false
      setBullets(NUM_BULLET)
    }, RELOADING_TIME[gameState.difficulty])
  }
})

canvas.addEventListener('click', () => {
  if (!gameState.isPlaying) {
    const camera = scene.cameras[0]
    camera.attachControl(canvas, true)
    gameState.isPlaying = true
  }
  // player must have bullets and is not reloading
  else if (gameState.bullets && !gameState.reloading) {
    createBullet(scene)
    setBullets(gameState.bullets - 1)
  }
})

let then = Date.now()
scene.registerAfterRender(() => {
  const now = Date.now()
  const delta = (now - then) / 1000
  updateCamera(scene)
  const points = updateBullets(scene, delta)
  gameState.points += points
  pointsText.textContent = gameState.points
  then = now
})

engine.runRenderLoop(() => {
  scene.render()
})
