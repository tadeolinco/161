import { Axis, MeshBuilder, Space, Vector3 } from 'babylonjs'
import { BASE_UNIT } from './constants'

// https://doc.babylonjs.com/babylon101/discover_basic_elements#plane
// https://doc.babylonjs.com/babylon101/position
export const createWalls = scene => {
  const ceiling = MeshBuilder.CreatePlane(
    'ceiling',
    { width: BASE_UNIT * 2, height: BASE_UNIT * 2 },
    scene
  )
  ceiling.position = new Vector3(0, BASE_UNIT, BASE_UNIT)
  ceiling.rotation.x = -Math.PI / 2

  const floor = MeshBuilder.CreatePlane(
    'floor',
    { width: BASE_UNIT * 2, height: BASE_UNIT * 2 },
    scene
  )
  floor.position = new Vector3(0, 0, BASE_UNIT)
  floor.rotation.x = Math.PI / 2

  const backWall = MeshBuilder.CreatePlane(
    'back_wall',
    { width: BASE_UNIT * 2, height: BASE_UNIT },
    scene
  )
  backWall.position = new Vector3(0, BASE_UNIT / 2, BASE_UNIT * 2)

  const rightWall = MeshBuilder.CreatePlane(
    'right_wall',
    { width: BASE_UNIT * 2, height: BASE_UNIT },
    scene
  )
  rightWall.position = new Vector3(BASE_UNIT, BASE_UNIT / 2, BASE_UNIT)
  rightWall.rotation.y = Math.PI / 2

  const leftWall = MeshBuilder.CreatePlane(
    'left_wall',
    { width: BASE_UNIT * 2, height: BASE_UNIT },
    scene
  )
  leftWall.position = new Vector3(-BASE_UNIT, BASE_UNIT / 2, BASE_UNIT)
  leftWall.rotation.y = -Math.PI / 2
}
