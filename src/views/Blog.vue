<template>
  <v-main>
    <v-container v-if="addingPost" fluid>
      <v-row justify="center">
        <v-col md="12" lg="12" sm="12">
          <v-btn @click="addingPost = false; editedPost = false" color="primary" outlined>Back</v-btn>
        </v-col>
      </v-row>
      <BlogpostCreator v-bind:editedPost="editedPost"/>
    </v-container>
    <v-container v-else fluid>
      <v-row justify="center">
        <v-col md="12" lg="8" sm="12">
          <v-btn @click="addingPost = true" block color="primary" elevation="0" v-if="loggedIn">New Post</v-btn>
        </v-col>
      </v-row>
      <BlogpostList @editPost="editPost($event)"/>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
import BlogpostList from '../components/UI/BlogpostList'
import BlogpostCreator from '../components/UI/BlogpostCreator'

export default {
  name: 'Blog',
  components: {
    BlogpostCreator,
    BlogpostList
  },
  computed: {
    ...mapState(['loggedIn'])
  },
  data () {
    return {
      addingPost: false,
      editedPost: false
    }
  },
  methods: {
    editPost (post) {
      this.addingPost = true
      this.editedPost = post
    }
  }
}
</script>
