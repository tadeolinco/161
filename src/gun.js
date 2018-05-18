import {
  MeshBuilder,
  Axis,
  Tools,
  Vector3,
  StandardMaterial,
  Texture,
} from 'babylonjs'
import { BASE_UNIT, GUN_POSITION } from './constants'

export const createGun = scene => {
  const camera = scene.cameras[0]
  const gunBody = MeshBuilder.CreateBox(
    'gun_body',
    { height: 0.25, width: 0.125, depth: 1 },
    scene
  )
  gunBody.position = GUN_POSITION.clone()
  gunBody.parent = camera

  const gunTip = MeshBuilder.CreateCylinder(
    'gun_tip',
    { tessellation: 3, height: 0.03, diameter: 0.1 },
    scene
  )
  gunTip.position = new Vector3(0, -0.34, 1.85)
  gunTip.rotation.x = Math.PI / 2
  gunTip.rotation.y = Math.PI / 2
  gunTip.parent = camera

  const gun_img = require('./assets/topview.png')
  const topview = new Texture(gun_img, scene)
  const gun_texture = new StandardMaterial('gunBody', scene)
  gun_texture.diffuseTexture = topview
  gunBody.material = gun_texture
}
