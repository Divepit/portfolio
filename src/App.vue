<template>
  <v-app id="app">
    <Toolbar/>
    <v-content class="pt-0">
      <router-view/>
    </v-content>
    <v-footer class="lighten-3 grey--text opensans" color="grey" elevation="1">
      <v-container>
        <v-row justify="center">
          <v-col cols="3">
            <span class="font-weight-black" style="font-size: 1.5rem">Hi, I'm Marco</span><br>
            I'm a Web Developer from Zurich. <br>
            Do you have a project or idea you'd like to talk about? Let me know! <br>
            <a href="mailto:hello@thedivepit.com">hello@thedivepit.com</a>
          </v-col>
          <v-col cols="3">
            <span class="font-weight-black" style="font-size: 1.5rem">Find me on social media!</span><br>
            <v-btn class="grey--text text-none" style="font-size: 1rem" text>
              <v-icon class="mr-2">mdi-github</v-icon>
              GitHub
            </v-btn>
            <br>
            <v-btn class="grey--text text-none" style="font-size: 1rem" text>
              <v-icon class="mr-2">mdi-linkedin</v-icon>
              LinkedIn
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
<script>
  import Toolbar from './components/UI/Toolbar'

  export default {
    name: 'App',
    components: { Toolbar }
  }
</script>
<style>
  #app {
    font-family: "Open Sans";
  }

  .muli {
    font-family: "Muli" !important;
  }
</style>
