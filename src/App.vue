<template>
  <v-app id="app">
    <Toolbar/>
    <v-content class="pt-0">
      <router-view/>
    </v-content>
    <CustomFooter/>
  </v-app>
</template>
<script>
import Toolbar from './components/UI/Toolbar'
import CustomFooter from './components/UI/CustomFooter'

export default {
  name: 'App',
  components: { CustomFooter, Toolbar }
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
