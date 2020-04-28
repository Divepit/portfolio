<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="7" sm="12">
        <v-app-bar app class="pl-0" color="white" dense elevation="0">
          <span class="grey--text font-weight-black text-none" style="font-size: 1.25rem" text>Marco Trentini</span>
          <v-spacer/>
          <v-btn color="grey" text to="/">About</v-btn>
          <v-btn color="grey" text to="/blog">Blog</v-btn>
          <v-btn class="text-none" color="grey" href="https://github.com/divepit" target="_blank" text>
            <v-icon>mdi-github</v-icon>
            GitHub
          </v-btn>
          <v-btn class="text-none" color="grey" href="https://github.com/divepit" target="_blank" text>
            <v-icon>mdi-linkedin</v-icon>
            LinkedIn
          </v-btn>
          <v-btn @click="signOut" class="py-0 lighten-2" color="primary" elevation="0" v-if="loggedIn">Sign out</v-btn>
          <v-btn class="py-0 lighten-2" color="primary" elevation="0" href="mailto:hello@thidivepit.com" v-else>Contact
          </v-btn>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { auth } from '../../firebase'
  import { mapState } from 'vuex'

  export default {
    name: 'Toolbar',
    computed: {
      ...mapState(['loggedIn'])
    },
    methods: {
      signOut () {
        auth.signOut()
          .then(delete localStorage.loggedIn, this.$store.state.loggedIn = false)
      }
    }
  }
</script>
<style>

  .muli {
    font-family: "Muli" !important;
  }
</style>
