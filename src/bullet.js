import { MeshBuilder, Tools, Tags, Matrix, Vector2, Vector3 } from 'babylonjs'
import uuid from 'uuid/v1'
import { GUN_POSITION, BULLET_SPEED } from './constants'

export const createBullet = scene => {
  // @TODO implement create bullet, keep angle of trajectory somehow
  const gun = scene.getMeshByID('gun')
  const bullet = MeshBuilder.CreateSphere(
    'bullet-' + uuid(),
    { diameter: 0.0625 },
    scene
  )
  // add tag so we can reference them later
  Tags.AddTagsTo(bullet, 'bullet')

  const camera = scene.cameras[0]
  // set position to be same as camera
  bullet.position = camera.position.clone()
  bullet.position.y -= 0.3

  // set bullet trajectory
  const invView = new Matrix()
  camera.getViewMatrix().invertToRef(invView)
  const direction = Vector3.TransformNormal(
    new Vector3(0, 0, BULLET_SPEED),
    invView
  )
  direction.normalize()
  bullet.trajectory = direction
}

// https://doc.babylonjs.com/resources/tags
export const updateBullets = (scene, delta) => {
  const bullets = scene.getMeshesByTags('bullet')
  const walls = scene.getMeshesByTags('wall')
  const platforms = scene.getMeshesByTags('platform')

  let points = 0
  for (const bullet of bullets) {
    // @TODO adjust bullet speed depending to delta
    bullet.position.addInPlace(bullet.trajectory)

    for (const wall of walls) {
      if (bullet.intersectsMesh(wall, false)) {
        bullet.dispose()
      }
    }
    for (const platform of platforms) {
      if (bullet.intersectsMesh(platform, false)) {
        bullet.dispose()
      }
    }

    /* for (const target of targets) {
      if (bullet.intersectsMesh(target, false)) {
        points += target.points;
        bullet.dispose()
        target.dispose()
      }
    } */
  }

  return points
}
