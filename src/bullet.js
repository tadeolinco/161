import { MeshBuilder } from 'babylonjs'
import uuid from 'uuid/v1'

export const createBullet = scene => {
  // @TODO implement create bullet, keep angle of trajectory somehow
  const gun = scene.getMeshByID('gun')
  console.log(gun.position)
  const bullet = MeshBuilder.CreateSphere(
    'bullet-' + uuid(),
    { diameter: 0.0625 },
    scene
  )
  bullet.position.z = 1.5
  bullet.position.y = 1
}

// https://doc.babylonjs.com/resources/tags
export const updateBullets = scene => {
  const bullets = scene.getMeshesByTags('bullet')
  const walls = scene.getMeshesByTags('wall')

  // @TODO get other meshes like the targets

  /**
   * @TODO
   * 1. iterate over bullets
   * 2. adjust their positions somehow (how to know angle? maybe put a BULLET_SPEED constant in constants.js)
   * 3. iterate over collidable meshes (walls, targets, etc)
   */
}
