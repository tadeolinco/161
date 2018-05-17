import { UniversalCamera, Vector3 } from 'babylonjs'
import { CAMERA_RESTRICTION } from './constants'

// https://doc.babylonjs.com/babylon101/cameras
export const createCamera = scene => {
  const camera = new UniversalCamera('Camera', new Vector3(0, 1, 0), scene)
  camera.angularSensibility = 5000
  camera.setTarget(Vector3.Zero())
  // camera.attachControl(canvas , true)
}

export const updateCamera = scene => {
  /**
   * Restricts camera movement
   * Adjust the denominators for Math.PI to adjust the restriction
   */
  const camera = scene.cameras[0]
  const { x, y } = camera.rotation

  const { topDown, sideToSide } = CAMERA_RESTRICTION

  if (y > sideToSide) {
    camera.rotation.y = sideToSide
  } else if (y < -sideToSide) {
    camera.rotation.y = -sideToSide
  }

  const topDownRestriction = Math.PI / 8

  if (x > topDown) {
    camera.rotation.x = topDown
  } else if (x < -topDown) {
    camera.rotation.x = -topDown
  }
}
