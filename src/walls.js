import {
  Axis,
  MeshBuilder,
  Space,
  Vector3,
  Tags,
  StandardMaterial,
  Texture,
} from 'babylonjs'
import { BASE_UNIT } from './constants'

// https://doc.babylonjs.com/babylon101/discover_basic_elements#plane
// https://doc.babylonjs.com/babylon101/position
// https://doc.babylonjs.com/resources/tags
export const createWalls = scene => {
  const ceiling = MeshBuilder.CreatePlane(
    'ceiling',
    { width: BASE_UNIT * 2, height: BASE_UNIT * 2 },
    scene
  )
  ceiling.position = new Vector3(0, BASE_UNIT, BASE_UNIT)
  ceiling.rotation.x = -Math.PI / 2
  ceiling.checkCollisions = true
  Tags.AddTagsTo(ceiling, 'wall')

  const floor = MeshBuilder.CreatePlane(
    'floor',
    { width: BASE_UNIT * 2, height: BASE_UNIT * 2 },
    scene
  )
  floor.position = new Vector3(0, 0, BASE_UNIT)
  floor.rotation.x = Math.PI / 2
  floor.checkCollisions = true
  Tags.AddTagsTo(floor, 'wall')

  const backWall = MeshBuilder.CreatePlane(
    'back_wall',
    { width: BASE_UNIT * 2, height: BASE_UNIT },
    scene
  )
  backWall.position = new Vector3(0, BASE_UNIT / 2, BASE_UNIT * 2)
  backWall.checkCollisions = true
  Tags.AddTagsTo(backWall, 'wall')

  const rightWall = MeshBuilder.CreatePlane(
    'right_wall',
    { width: BASE_UNIT * 2, height: BASE_UNIT },
    scene
  )
  rightWall.position = new Vector3(BASE_UNIT, BASE_UNIT / 2, BASE_UNIT)
  rightWall.rotation.y = Math.PI / 2
  rightWall.checkCollisions = true
  Tags.AddTagsTo(rightWall, 'wall')

  const leftWall = MeshBuilder.CreatePlane(
    'left_wall',
    { width: BASE_UNIT * 2, height: BASE_UNIT },
    scene
  )
  leftWall.position = new Vector3(-BASE_UNIT, BASE_UNIT / 2, BASE_UNIT)
  leftWall.rotation.y = -Math.PI / 2
  leftWall.checkCollisions = true
  Tags.AddTagsTo(leftWall, 'wall')

  const f_img = require('./assets/floor.jpg')
  const w_img = require('./assets/walls.jpg')

  const floor_texture = new StandardMaterial('floor', scene)
  floor_texture.diffuseTexture = new Texture(f_img, scene)

  const wall_texture = new StandardMaterial('wall', scene)
  wall_texture.diffuseTexture = new Texture(w_img, scene)
  wall_texture.ambientTexture = new Texture(w_img, scene)
  wall_texture.emissiveTexture = new Texture(w_img, scene)

  floor.material = floor_texture
  rightWall.material = wall_texture
  leftWall.material = wall_texture
  backWall.material = wall_texture
}
