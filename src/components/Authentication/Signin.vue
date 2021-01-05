<template>
  <v-container class="fill-height" fluid>
    <v-card class="mx-auto" flat width="600">
      <v-toolbar flat>
        <v-card-title class="pl-0 muli primary--text">Sign in</v-card-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field @keydown.enter="signin()" flat label="E-Mail" outlined solo type="email" color="primary"
                      v-model="email"></v-text-field>
        <v-text-field @keydown.enter="signin()" flat label="Password" outlined solo type="password"
                      v-model="password"></v-text-field>
        <v-alert outlined dense color="error">Hello</v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { auth } from '../../firebase'

export default {
  name: 'Signin',
  created () {
    if (localStorage.loggedIn) {
      this.$router.replace('/')
    }
  },
  data () {
    return {
      email: null,
      password: null,
      message: null
    }
  },
  methods: {
    signin () {
      if (this.email && this.password) {
        auth.signInWithEmailAndPassword(this.email, this.password)
          .then(response => {
            if (auth.currentUser) {
              this.$store.state.loggedIn = true
              localStorage.loggedIn = true
              this.$router.replace('/')
            } else {
            }
          })
          .catch(error => {
            this.message = error
          })
      }
    }
  }

}
</script>

<style scoped>

</style>
