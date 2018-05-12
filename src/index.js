import {
  Engine,
  HemisphericLight,
  MeshBuilder,
  PointLight,
  Scene,
  UniversalCamera,
  Vector3,
} from 'babylonjs'

const canvas = document.getElementById('canvas')

const engine = new Engine(canvas, true)
engine.isPointerLock = true

// Create the scene space
const scene = new Scene(engine)

// Add a camera to the scene and attach it to the canvas
const camera = new UniversalCamera('Camera', new Vector3(0, 0, -10), scene)
camera.angularSensibility = 5000
camera.setTarget(Vector3.Zero())
camera.attachControl(canvas, true)

// Add lights to the scene
const light1 = new HemisphericLight('light1', new Vector3(1, 1, 0), scene)
const light2 = new PointLight('light2', new Vector3(0, 1, -1), scene)

// Add and manipulate meshes in the scene
const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene)

engine.runRenderLoop(() => {
  /**
   * Restricts camera movement
   * Adjust the denominators for Math.PI to adjust the restriction
   */
  const camera = scene.cameras[0]
  const { x, y } = camera.rotation
  if (y > Math.PI / 8) {
    camera.rotation.y = Math.PI / 8
  } else if (y < -Math.PI / 8) {
    camera.rotation.y = -Math.PI / 8
  }

  if (x > Math.PI / 16) {
    camera.rotation.x = Math.PI / 16
  } else if (x < -Math.PI / 16) {
    camera.rotation.x = -Math.PI / 16
  }

  scene.render()
})
