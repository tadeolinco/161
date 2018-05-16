import { SpotLight, Vector3, PointLight } from 'babylonjs'
import { BASE_UNIT } from './constants'

// https://doc.babylonjs.com/babylon101/lights
export const createLight = scene => {
  const position = new Vector3(0, BASE_UNIT, BASE_UNIT)
  const direction = new Vector3(0, -1, 0)
  const angle = Math.PI
  const exponent = 10
  const spotLight = new SpotLight(
    'spotLight',
    position,
    direction,
    angle,
    exponent,
    scene
  )

  const pointLight = new PointLight(
    'pointLight',
    new Vector3(0, BASE_UNIT - 1, BASE_UNIT),
    scene
  )
  pointLight.intensity = 0.05
}
