import { MeshBuilder, Axis, Tools } from 'babylonjs'
import { BASE_UNIT, GUN_POSITION } from './constants'

export const createGun = scene => {
  const camera = scene.cameras[0]
  const gun = MeshBuilder.CreateBox(
    'gun',
    { height: 0.25, width: 0.125, depth: 1 },
    scene
  )

  gun.position = GUN_POSITION.clone()
  gun.parent = camera
}
