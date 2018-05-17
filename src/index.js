import { Engine, Scene } from 'babylonjs'
import { createWalls } from './walls'
import { createPlatforms } from './platforms'
import { createCamera, updateCamera } from './camera'
import { createLights, updateLights } from './lights'
import { createStrings } from './strings'
import { createGun } from './gun'
import { updateBullets, createBullet } from './bullet'
import { DIFFICULTY, RELOADING_TIME, NUM_BULLET, GAME_TIME } from './constants'
import { createShapes } from './shapes'
import { createBullseyes } from './bullseye'

// https://doc.babylonjs.com/babylon101/first
const canvas = document.getElementById('canvas')
const bulletsText = document.getElementById('bullets')
const reloadingText = document.getElementById('reloading')
const pointsText = document.getElementById('points')
const timeText = document.getElementById('time')
const difficultyButtons = document.getElementsByClassName('difficulty-button')
const gameDifficultyMenu = document.getElementById('game-difficulty')
const gameStatusPanel = document.getElementById('game-status')

const gameState = {
  isPlaying: false,
  points: 0,
  bullets: 10,
  reloading: false,
  difficulty: null,
  time: 0,
  gameOver: true,
}

let then = null

const engine = new Engine(canvas, true)
engine.isPointerLock = true

const scene = new Scene(engine)
scene.collisionsEnabled = true
scene.workerCollisions = true

createCamera(scene)
createStrings(scene)
createPlatforms(scene)
createLights(scene)
createWalls(scene)
createGun(scene)

const setBullets = value => {
  gameState.bullets = value
  bulletsText.textContent = `Bullets: ${value}`
}

// keyboard events
window.addEventListener('keydown', event => {
  if (!gameState.gameOver) {
    if (event.code === 'Escape') {
      const camera = scene.cameras[0]
      if (gameState.isPlaying) {
        camera.detachControl(canvas)
        gameState.isPlaying = false
        then = null
      }
    } else if (event.code === 'Space' && gameState.isPlaying) {
      const gunBody = scene.getMeshByID('gun_body')
      const gunTip = scene.getMeshByID('gun_tip')
      reloadingText.hidden = false
      gameState.reloading = true
      gunBody.setEnabled(false)
      gunTip.setEnabled(false)
      setTimeout(() => {
        reloadingText.hidden = true
        gameState.reloading = false
        gunBody.setEnabled(true)
        gunTip.setEnabled(true)
        setBullets(NUM_BULLET)
      }, RELOADING_TIME[gameState.difficulty])
    }
  }
})

// click events
canvas.addEventListener('click', () => {
  if (!gameState.gameOver) {
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
  }
})

// updates that rely on delta time
scene.registerAfterRender(() => {
  if (gameState.isPlaying && !gameState.gameOver) {
    if (!then) then = Date.now()

    const now = Date.now()
    const delta = (now - then) / 1000

    updateCamera(scene)

    const points = updateBullets(scene, delta)
    gameState.points += points
    pointsText.textContent = `Points: ${gameState.points}`

    gameState.time -= delta
    timeText.textContent = `Time: ${Math.round(gameState.time)} seconds`

    then = now

    // GAME OVER
    if (gameState.time <= 0) {
      const camera = scene.cameras[0]
      camera.detachControl(canvas)
      gameState.isPlaying = false
      gameState.gameOver = true
      gameDifficultyMenu.hidden = false
      gameStatusPanel.hidden = true
    }
  }
})

engine.runRenderLoop(() => {
  scene.render()
})

for (const button of difficultyButtons) {
  button.addEventListener('click', () => {
    const difficulty = button.getAttribute('data-value').toUpperCase()
    gameState.difficulty = DIFFICULTY[difficulty]
    gameState.gameOver = false
    gameState.isPlaying = true
    then = null
    gameState.time = GAME_TIME[difficulty]
    gameDifficultyMenu.hidden = true
    gameStatusPanel.hidden = false

    setBullets(10)
    gameState.points = 0
    pointsText.textContent = `Points: ${gameState.points}`

    gameState.reloading = false

    const targets = scene.getMeshesByTags('target')
    targets.forEach(target => target.dispose())
    createBullseyes(scene)
    createShapes(scene)
    const camera = scene.cameras[0]
    camera.attachControl(canvas, true)
    updateLights(scene, gameState.difficulty)
  })
}
