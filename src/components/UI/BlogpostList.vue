<template>
  <v-container fluid>
    <v-row justify="center" class="mb-6">
      <v-col md="8" lg="8" sm="12">
        <span class="grey--text text--darken-2 font-weight-bold" style="font-size: 1.75rem">Recent Posts</span>
      </v-col>
    </v-row>
    <v-row :key="post.id" justify="center" v-for="post in postsOnPage">
      <v-col md="12" lg="8" sm="12">
        <v-card flat outlined>
          <v-card-title class="font-weight-black grey--text" style="word-break: keep-all;">{{post.title}}
            <v-spacer/>
            <v-btn elevation="0" class="text-none" color="primary" :to="'/blog/'+post.id" outlined>Read</v-btn>
          </v-card-title>
          <v-card-subtitle class="pb-2 font-weight-medium grey--text text--lighten-1">Created at: {{post.date}}
          </v-card-subtitle>
          <v-card-text class="grey--text">{{post.introduction}}</v-card-text>
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
    <v-row class="mt-4" v-if="itemsPerPage<posts.length">
      <v-col align-self="center">
        <v-pagination
          v-model="page"
          :length="Math.ceil(posts.length/this.itemsPerPage)"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-spacer/>
      <v-col md="1" lg="1" sm="1" cols="5" align-self="center" class="pr-0 font-weight-light grey--text">
        Items per page:
      </v-col>
      <v-col md="1" lg="1" sm="1" class="pl-0 pr-12">
        <v-select dense solo :items="[4,8,20,100]" v-model="itemsPerPage" hide-details ></v-select>
      </v-col>
      <v-spacer/>
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
    ...mapState(['loggedIn']),
    postsOnPage: function () {
      if (this.itemsPerPage < this.posts.length) {
        return this.posts.slice((this.page - 1) * this.itemsPerPage, ((this.page - 1) * this.itemsPerPage) + this.itemsPerPage)
      } else {
        return this.posts
      }
    }
  },
  data () {
    return {
      posts: [],
      page: 1,
      itemsPerPage: 4
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
          this.posts.sort((a, b) => (Date.parse(b.date) > Date.parse(a.date)) ? 1 : -1)
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
