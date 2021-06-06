import {
  // AmbientLight,
  DirectionalLight,
  HemisphereLight
} from 'three'

function createLights () {
  const ambientLight = new HemisphereLight(
    'skyblue', // bright sky color
    'lawngreen', // dim ground color
    5 // intensity
  )
  const mainLight = new DirectionalLight('white', 5)
  mainLight.position.set(10, 10, 10)

  return { ambientLight, mainLight }
}

export { createLights }
