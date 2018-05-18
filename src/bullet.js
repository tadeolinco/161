import {
  MeshBuilder,
  Tools,
  Tags,
  Matrix,
  StandardMaterial,
  Texture,
  Vector2,
  Vector3,
} from 'babylonjs'
import { BULLET_SPEED } from './constants'

let bulletCount = 0
export const createBullet = scene => {
  // @TODO implement create bullet, keep angle of trajectory somehow
  const bullet = MeshBuilder.CreateSphere(
    'bullet-' + bulletCount++,
    { diameter: 0.0625 },
    scene
  )
  bullet.checkCollisions = true

  // add tag so we can reference them later
  Tags.AddTagsTo(bullet, 'bullet')

  const b_img = require('./assets/bullet.jpg')

  const bullet_texture = new StandardMaterial('bullet', scene)
  bullet_texture.diffuseTexture = new Texture(b_img, scene)
  bullet_texture.ambientTexture = new Texture(b_img, scene)
  bullet_texture.emissiveTexture = new Texture(b_img, scene)

  bullet.material = bullet_texture

  const camera = scene.cameras[0]
  // set position to be same as camera
  bullet.position = camera.position.clone()
  bullet.position.y -= 0.5

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
  let targets = scene.getMeshesByTags('target')

  console.log(targets)
  let points = 0
  for (const bullet of bullets) {
    // @TODO adjust bullet speed depending to delta
    bullet.position.addInPlace(bullet.trajectory)

    if (!bullet.toBeDisposed)
      for (const target of targets) {
        if (bullet.intersectsMesh(target, false)) {
          points += target.points
          bullet.toBeDisposed = true
          target.toBeDisposed = true
        }
      }

    targets = targets.filter(target => {
      if (target.toBeDisposed) {
        target.dispose()
        return false
      }
      return true
    })

    if (bullet.toBeDisposed) {
      bullet.dispose()
    }
  }

  return points
}
