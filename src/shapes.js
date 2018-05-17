import { MeshBuilder, Vector3, Tags } from 'babylonjs'
import { BASE_UNIT } from './constants'

export const createShapes = scene => {
  let shapeCount = 0
  for (let i = 0; i < 14; ++i) {
    const shape = MeshBuilder.CreateCylinder(
      'shape-' + shapeCount,
      { height: 0.15, diameterBottom: 0.1, diameterTop: 0.2 },
      scene
    )
    shape.checkCollisions = true
    shape.position = new Vector3(-2 + 0.3 * i, 0.5, BASE_UNIT + 1)
    shape.points = 10
    Tags.AddTagsTo(shape, 'target')
    shapeCount++
  }

  for (let i = 0; i < 9; ++i) {
    const shape = MeshBuilder.CreateCylinder(
      'shape-' + shapeCount,
      { height: 0.15, diameterBottom: 0.1, diameterTop: 0.2 },
      scene
    )
    shape.checkCollisions = true
    shape.position = new Vector3(2.1, 0.5, BASE_UNIT + 1 - 0.3 * i)
    shape.points = 10
    Tags.AddTagsTo(shape, 'target')
    shapeCount++
  }

  for (let i = 0; i < 9; ++i) {
    const shape = MeshBuilder.CreateCylinder(
      'shape-' + shapeCount,
      { height: 0.15, diameterBottom: 0.1, diameterTop: 0.2 },
      scene
    )
    shape.checkCollisions = true
    shape.position = new Vector3(-2, 0.5, BASE_UNIT + 1 - 0.3 * i)
    shape.points = 10
    Tags.AddTagsTo(shape, 'target')
    shapeCount++
  }
}
