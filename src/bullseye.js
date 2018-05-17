import { MeshBuilder, Vector3, Axis, Tags } from 'babylonjs'
import { BASE_UNIT } from './constants'

export const createBullseyes = scene => {
  let count = 0
  for (let i = 0; i < 14; ++i) {
    const bullseye = MeshBuilder.CreateCylinder(
      'bullseye-' + count++,
      { diameter: 0.2, height: 0.1 },
      scene
    )
    bullseye.position = new Vector3(-2 + 0.3 * i, 1.3, BASE_UNIT + 1)
    bullseye.rotate(Axis.X, Math.PI / 2)
    bullseye.points = 5
    Tags.AddTagsTo(bullseye, 'target')
  }
  for (let i = 0; i < 14; ++i) {
    const bullseye = MeshBuilder.CreateCylinder(
      'bullseye-' + count++,
      { diameter: 0.2, height: 0.1 },
      scene
    )
    bullseye.position = new Vector3(-2 + 0.3 * i, 2.1, BASE_UNIT + 1)
    bullseye.rotate(Axis.X, Math.PI / 2)
    bullseye.points = 5
    Tags.AddTagsTo(bullseye, 'target')
  }
}
