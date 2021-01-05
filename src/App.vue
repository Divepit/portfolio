<template>
  <v-app id="app">
    <Toolbar/>
    <v-main class="pt-0">
      <router-view/>
    </v-main>
    <CustomFooter/>
  </v-app>
</template>
<script>
import Toolbar from './components/UI/Toolbar'
import CustomFooter from './components/UI/CustomFooter'

export default {
  name: 'App',
  components: { CustomFooter, Toolbar },
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
<style>
  #app {
    font-family: "Open Sans";
    overflow: hidden;
  }

  .muli {
    font-family: "Muli" !important;
  }
</style>
