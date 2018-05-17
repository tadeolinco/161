import { Vector3 } from 'babylonjs'

export const BASE_UNIT = 3 // Base unit for walls and lights

export const GUN_POSITION = new Vector3(0, -0.5, 1.6)

export const BULLET_SPEED = 1

export const CAMERA_RESTRICTION = {
  topDown: Math.PI / 8,
  sideToSide: Math.PI / 3.5,
}

export const DIFFICULTY = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD',
}

export const RELOADING_TIME = {
  EASY: 2000,
  MEDIUM: 3000,
  HARD: 4000,
}

// in seconds
export const GAME_TIME = {
  EASY: 60,
  MEDIUM: 40,
  HARD: 20,
}

export const NUM_BULLET = 10
