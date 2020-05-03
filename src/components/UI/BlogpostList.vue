<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="12" lg="8" sm="12">
        <span class="grey--text text--darken-2 font-weight-medium" style="font-size: 1.5rem">Recent Posts</span>
      </v-col>
    </v-row>
    <v-row :key="post.id" justify="center" v-for="post in posts">
      <v-col md="12" lg="8" sm="12">
        <v-card flat outlined>
          <v-card-title class="font-weight-black grey--text" style="word-break: keep-all;">{{post.title}}
            <v-spacer/>
            <v-btn elevation="0" class="text-none" color="primary" :to="'/blog/'+post.id" >Read</v-btn>
          </v-card-title>
          <v-card-subtitle class="pb-2 font-weight-medium grey--text text--lighten-1">Created at: {{post.date}}
          </v-card-subtitle>
          <v-card-text class="grey--text">{{post.content.slice(0,250)}}...</v-card-text>
          <v-card-actions v-if="loggedIn">
            <v-btn @click="$emit('editPost', post)" color="primary" outlined >Edit</v-btn>
            <v-btn color="success" elevation="0" outlined rounded v-if="post.public">
              <v-icon>mdi-check</v-icon>
              Public
            </v-btn>
            <v-spacer/>
            <v-btn @click="deletePost(post.id)" class="text-none" color="error" text v-if="loggedIn">Delete post</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import { db } from '@/firebase.js'

export default {
  name: 'BlogpostList',
  created () {
    this.getBlogposts()
  },
  computed: {
    ...mapState(['loggedIn'])
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    getBlogposts () {
      this.posts = []
      db.collection('blogposts').get()
        .then(response => {
          response.forEach(doc => {
            if (this.loggedIn || doc.data().public) {
              this.posts.push(doc.data())
            }
          })
          this.posts = this.posts.reverse()
        })
    },
    deletePost (id) {
      db.collection('blogposts').doc(id).delete()
        .then(
          this.getBlogposts()
        )
    }
  }
}
</script>
