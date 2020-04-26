<template>
  <v-app id="app">
    <!--    <v-navigation-drawer width="200" app>-->
    <!--      <v-list>-->
    <!--        <v-list-item-group>-->
    <!--          <v-list-item>-->
    <!--            Hello-->
    <!--          </v-list-item>-->
    <!--        </v-list-item-group>-->
    <!--      </v-list>-->
    <!--    </v-navigation-drawer>-->
    <v-app-bar app class="mx-auto" color="white" dark flat width="1200">
      <v-toolbar-title class="grey--text font-weight-black muli">Marco Trentini</v-toolbar-title>
      <v-spacer/>
      <v-btn color="grey" text>Blog</v-btn>
      <v-btn color="grey" text>Projects</v-btn>
      <v-btn class="py-0" color="primary" elevation="0">Contact</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-card class="mx-auto" flat outlined width="1200">
          <v-card-title class="font-weight-light muli">Hello, I'm Marco</v-card-title>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
  export default {
    name: 'App',

    components: {},

    data: () => ({
      //
    })
  }
</script>
<style>
  .opensans {
    font-family: "Open Sans";
  }

  .muli {
    font-family: "Muli" !important;
  }
</style>
