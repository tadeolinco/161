import { MeshBuilder, Axis, Tools, Vector3 } from 'babylonjs'
import { BASE_UNIT, GUN_POSITION } from './constants'

export const createGun = scene => {
  const camera = scene.cameras[0]
  const gunBody = MeshBuilder.CreateBox(
    'gun_body',
    { height: 0.25, width: 0.125, depth: 1 },
    scene
  )
  gunBody.position = GUN_POSITION.clone()
  gunBody.parent = camera

  const gunTip = MeshBuilder.CreateCylinder(
    'gun_tip',
    { tessellation: 3, height: 0.03, diameter: 0.1 },
    scene
  )
  gunTip.position = new Vector3(0, -0.34, 1.85)
  gunTip.rotation.x = Math.PI / 2
  gunTip.rotation.y = Math.PI / 2
  gunTip.parent = camera
}
