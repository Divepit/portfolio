<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <v-card dark elevation="0" class="mb-6" outlined>
            <v-card-title>Testing Canvas</v-card-title>
          </v-card>
          <v-card elevation="24" height="600" id="scene-container">
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { World } from '../../modules/three/World.js'
export default {
  name: 'Canvas',
  mounted () {
    // create the main function
    async function main () {
      // Get a reference to the container element
      const container = document.querySelector('#scene-container')

      // 1. Create an instance of the World app
      const world = new World(container)

      // 2. Render the scene
      // start the animation loop
      world.start()
    }

    // call main to start the app
    main()
  }
}
</script>
