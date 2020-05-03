<template>
  <div>
    <v-row justify="center">
      <v-col sm="12" md="6" lg="6">
        <v-row>
          <v-col md="12" lg="7" sm="12" cols="12">
            <v-text-field flat hide-details label="Post Title" solo style="border: 1px lightgrey solid"
                          v-model="post.title"></v-text-field>
          </v-col>
            <v-col class="pt-2" md="12" lg="5" sm="12" cols="12" align-self="center">
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
          <v-col class="py-0" md="12" lg="12" sm="12" cols="12">
            <Editor
              :outline="true"
              class="pa-0"
              :hint="'Character count: ' + post.content.length"
              mode="editor"
              nativeEmoji
              v-model="post.content"
              :renderOptions="{katex: false}"
              :renderConfig="renderConfig"
              :copy="true"
            />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="pt-2" md="12" lg="12" sm="12">
            <v-btn @click="savePost" class="mr-2" color="primary" outlined>Save</v-btn>
            <v-btn @click="publishPost" class="mr-3" color="success" v-if="!post.public">Publish</v-btn>
            <v-btn @click="unpublishPost" class="mr-3" color="error" v-if="post.public">Unpublish</v-btn>
            <v-btn color="success" elevation="0" outlined rounded v-if="post.public">
              <v-icon>mdi-check</v-icon>
              Published
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <!-- Middle -->
      <v-col sm="12" md="6" lg="6" cols="12" class="px-6">
        <v-row justify="center">
          <v-col class="pb-0" md="12" lg="12" sm="12">
            <span class="font-weight-black" style="font-size: 2rem">{{post.title ? post.title : 'Title'}}</span>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="pt-0" md="12" lg="12" sm="12">
            <span class="font-weight-black grey--text" style="font-size: 1rem">{{post.date}}, by Marco Trentini</span>
          </v-col>
        </v-row>
        <v-row justify="center">
          <Editor
            :outline="true"
            class="pa-0"
            mode="viewer"
            nativeEmoji
            v-model="post.content"
          />
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar v-model="saved" color="success" :timeout="3000" top>Post saved</v-snackbar>
    <v-snackbar v-model="published" color="success" :timeout="3000" top>Post published</v-snackbar>
    <v-snackbar v-model="unpublished" color="error" :timeout="3000" top>Post unpublished</v-snackbar>
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
      var oldDate = this.editedPost.date
      this.post = this.editedPost
      this.post.date = oldDate
    } else {
      var today = new Date()
      this.post.date = today.toDateString()
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
      },
      renderConfig: {
        katex: {
          // formula delimiters
          delimiters: [
            {
              left: '$$$',
              right: '$$$',
              options: {
                displayMode: true // block
              }
            },
            {
              left: '\\[',
              right: '\\]',
              options: {
                displayMode: true // block
              }
            },
            {
              left: '$$',
              right: '$$',
              options: {
                displayMode: false // inline
              }
            },
            {
              left: '\\(',
              right: '\\)',
              options: {
                displayMode: false // inline
              }
            }
          ]
        },
        mermaid: undefined // The native mermaid config
      },
      saved: false,
      published: false,
      unpublished: false
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
        .then(this.saved = true)
    },
    publishPost () {
      if (this.post.id === null) {
        this.post.id = this.makeid(10)
      }
      this.post.public = true
      db.collection('blogposts').doc(this.post.id).set(this.post)
        .then(this.published = true)
    },
    unpublishPost () {
      if (this.post.id === null) {
        this.post.id = this.makeid(10)
      }
      this.post.public = false
      db.collection('blogposts').doc(this.post.id).set(this.post)
        .then(this.unpublished = true)
    }
  }
}
</script>
<style>
</style>
