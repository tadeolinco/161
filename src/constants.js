import { Vector3 } from 'babylonjs'

export const BASE_UNIT = 3 // Base unit for walls and lights

export const GUN_POSITION = new Vector3(0, -0.5, 1.5)

export const BULLET_SPEED = 1

export const CAMERA_RESTRICTION = {
  topDown: Math.PI / 8,
  sideToSide: Math.PI / 3.5,
}
