import { createCamera } from './components/camera.js'
import { createMeshGroup } from './components/meshGroup.js'
import { createLights } from './components/lights.js'
import { createScene } from './components/scene.js'
import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/Loop.js'
import { createControls } from './systems/controls.js'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera
let renderer
let scene
let loop

class World {
  // 1. Create an instance of the World app
  constructor (container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()

    const controls = createControls(camera, renderer.domElement)
    console.log(controls)

    loop = new Loop(camera, scene, renderer)

    container.append(renderer.domElement)

    const { ambientLight, mainLight } = createLights()

    const meshGroup = createMeshGroup()

    loop.updatables.push(controls, meshGroup)
    scene.add(ambientLight, mainLight, meshGroup)

    const resizer = new Resizer(container, camera, renderer)
    resizer.onResize = () => {
      this.render()
    }
  }

  // 2. Render the scene
  render () {
    // draw a single frame
    renderer.render(scene, camera)
  }

  start () {
    loop.start()
  }

  stop () {
    loop.stop()
  }
}

export { World }
