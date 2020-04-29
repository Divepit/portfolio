<template>
  <div>
    <v-row justify="center">
      <v-col md="6" sm="12">
        <v-text-field flat hide-details label="Post Title" solo style="border: 1px lightgrey solid"
                      v-model="post.title"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="py-0" md="6" sm="12">
        <Editor
          :outline="true"
          class="pa-0"
          hint="Test"
          mode="editor"
          nativeEmoji
          ref="editor"
          v-model="post.content"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="pt-0" md="6" sm="12">
        <span class="grey--text mt-0">Character count: {{post.content.length}}</span>
        <v-spacer class="mb-6"/>
        <v-btn @click="savePost" class="mr-2" color="primary" outlined>Save</v-btn>
        <v-btn @click="publishPost" class="mr-3" color="success" v-if="!post.public">Publish</v-btn>
        <v-btn @click="unpublishPost" class="mr-3" color="error" v-if="post.public">Unpublish</v-btn>
        <v-btn color="success" elevation="0" outlined rounded v-if="post.public">
          <v-icon>mdi-check</v-icon>
          Published
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="6" sm="12">
        <v-divider/>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="pb-0" md="6" sm="12">
        <span class="font-weight-black" style="font-size: 2rem"><v-divider class="mr-2" vertical/>{{post.title ? post.title : 'Title'}}</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="pt-0" md="6" sm="12">
        <span class="font-weight-black grey--text" style="font-size: 1rem"><v-divider class="mr-2" vertical/> Created: {{post.date}}</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="grey--text text--darken-3" id="preview" md="6" sm="12">
        <Editor
          :outline="true"
          class="pa-0"
          hint="Test"
          mode="viewer"
          nativeEmoji
          ref="editor"
          v-model="post.content"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor'
import 'vuetify-markdown-editor/dist/vuetify-markdown-editor.css'
import { db } from '@/firebase.js'

export default {
  name: 'BlogpostCreator',
  components: { Editor },
  props: ['editedPost'],
  created () {
    if (this.editedPost) {
      this.post = this.editedPost
    } else {
      var today = new Date()
      this.post.date = today.toDateString() + ', ' + today.getHours() + ':' + today.getMinutes()
    }
  },
  data () {
    return {
      post: {
        id: null,
        title: '',
        content: '',
        public: false,
        date: ''
      }
    }
  },
  methods: {
    makeid (length) {
      var result = ''
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      var charactersLength = characters.length
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
      }
      return result
    },
    savePost () {
      if (this.post.id === null) {
        this.post.id = this.makeid(10)
      }
      db.collection('blogposts').doc(this.post.id).set(this.post)
    },
    publishPost () {
      if (this.post.id === null) {
        this.post.id = this.makeid(10)
      }
      this.post.public = true
      db.collection('blogposts').doc(this.post.id).set(this.post)
    },
    unpublishPost () {
      if (this.post.id === null) {
        this.post.id = this.makeid(10)
      }
      this.post.public = false
      db.collection('blogposts').doc(this.post.id).set(this.post)
    }
  }
}
</script>
<style>
</style>
