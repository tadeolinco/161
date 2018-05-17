import { createBullet } from './bullet'

const gameState = {
  isPlaying: false,
}

export const addListeners = scene => {
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      const camera = scene.cameras[0]
      if (gameState.isPlaying) {
        camera.detachControl(canvas)
        gameState.isPlaying = false
      }
    } else if (event.code === 'Space' && gameState.isPlaying) {
      console.log('reloading')
    }
  })

  const canvas = document.getElementById('canvas')
  canvas.addEventListener('click', () => {
    if (!gameState.isPlaying) {
      const camera = scene.cameras[0]
      camera.attachControl(canvas, true)
      gameState.isPlaying = true
    } else {
      createBullet(scene)
    }
  })
}
