import { MeshBuilder, Vector3, Tags } from 'babylonjs'
import { BASE_UNIT } from './constants'

export const createStrings = scene => {
  const lowerString = MeshBuilder.CreateCylinder(
    'lower_string',
    { height: BASE_UNIT * 2, diameter: 0.02 },
    scene
  )
  lowerString.position = new Vector3(0, 1.6, BASE_UNIT * 2)
  lowerString.rotation.z = Math.PI / 2
  Tags.AddTagsTo(lowerString, 'string')

  const higherString = MeshBuilder.CreateCylinder(
    'higher_string',
    { height: BASE_UNIT * 2, diameter: 0.02 },
    scene
  )
  higherString.position = new Vector3(0, 2.8, BASE_UNIT * 2)
  higherString.rotation.z = Math.PI / 2
  Tags.AddTagsTo(higherString, 'string')
}
