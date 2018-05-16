import { UniversalCamera, Vector3 } from 'babylonjs'

// https://doc.babylonjs.com/babylon101/cameras
export const createCamera = scene => {
  const camera = new UniversalCamera('Camera', new Vector3(0, 1, 0), scene)
  camera.angularSensibility = 5000
  camera.setTarget(Vector3.Zero())
  // camera.attachControl(canvas, true)
}

export const updateCamera = scene => {
  /**
   * Restricts camera movement
   * Adjust the denominators for Math.PI to adjust the restriction
   */
  const camera = scene.cameras[0]
  const { x, y } = camera.rotation
  if (y > Math.PI / 8) {
    camera.rotation.y = Math.PI / 8
  } else if (y < -Math.PI / 8) {
    camera.rotation.y = -Math.PI / 8
  }

  if (x > Math.PI / 16) {
    camera.rotation.x = Math.PI / 16
  } else if (x < -Math.PI / 16) {
    camera.rotation.x = -Math.PI / 16
  }
}
