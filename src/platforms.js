import { MeshBuilder, Vector3, Tags } from 'babylonjs'
import { BASE_UNIT } from './constants'

export const createPlatforms = scene => {
  const leftPlatform = MeshBuilder.CreateBox(
    'left_platform',
    { height: 0.5, width: 1, depth: BASE_UNIT + 1 },
    scene
  )
  leftPlatform.position = new Vector3(-BASE_UNIT, 0, BASE_UNIT + 1)
  Tags.AddTagsTo(leftPlatform, 'platform')

  const rightPlatform = MeshBuilder.CreateBox(
    'right_platform',
    { height: 0.5, width: 1, depth: BASE_UNIT + 1 },
    scene
  )
  rightPlatform.position = new Vector3(BASE_UNIT, 0, BASE_UNIT + 1)
  Tags.AddTagsTo(rightPlatform, 'platform')

  const centerPlatform = MeshBuilder.CreateBox(
    'center_platform',
    { height: 0.5, width: BASE_UNIT * 2, depth: 1.5 },
    scene
  )
  centerPlatform.position = new Vector3(0, 0, BASE_UNIT * 2 - 0.25)
  Tags.AddTagsTo(centerPlatform, 'platform')
}
