import { SpotLight, Vector3, MeshBuilder, PointLight } from 'babylonjs'
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

  /**
   * Remove the sphere later, this is just to test the lights
   */
  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 0.5 }, scene)
  sphere.position.z = BASE_UNIT
  sphere.position.y = BASE_UNIT / 2
  const pointLight = new PointLight(
    'pointLight',
    new Vector3(0, BASE_UNIT - 1, BASE_UNIT),
    scene
  )
  pointLight.intensity = 0.05
}
