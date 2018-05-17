import { SpotLight, Vector3, PointLight } from 'babylonjs'
import { BASE_UNIT } from './constants'

// https://doc.babylonjs.com/babylon101/lights
export const createLights = scene => {
  const position1 = new Vector3(0, BASE_UNIT, BASE_UNIT + 1)
  const direction = new Vector3(0, -1, 0)
  const angle = Math.PI
  const exponent = 20
  const spotLight1 = new SpotLight(
    'spotLight1',
    position1,
    direction,
    angle,
    exponent,
    scene
  )

  const position2 = new Vector3(1, BASE_UNIT, BASE_UNIT - 1)
  const spotLight2 = new SpotLight(
    'spotLight2',
    position2,
    direction,
    angle,
    exponent,
    scene
  )

  const position3 = new Vector3(-1, BASE_UNIT, BASE_UNIT - 1)
  const spotLight3 = new SpotLight(
    'spotLight3',
    position3,
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
