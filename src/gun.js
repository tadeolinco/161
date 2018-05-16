import { MeshBuilder, Vector3 } from 'babylonjs'
import { BASE_UNIT } from './constants'

export const createGun = scene => {
  const gun = MeshBuilder.CreateBox(
    'gun',
    { height: 0.25, width: 0.25, depth: 1 },
    scene
  )

  gun.position = new Vector3(0.5, -0.5, 1.5)
  const camera = scene.cameras[0]
  gun.parent = camera
}
