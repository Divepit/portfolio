<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col class="pb-0" md="12" lg="8" sm="12">
          <v-btn color="primary" outlined to="/blog">
            <v-icon>mdi-left</v-icon>
            All posts
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="pb-0 pt-6" md="12" lg="8" sm="12">
          <span class="font-weight-black grey--text text--darken-2" style="font-size: 2.5rem; word-break: keep-all">{{post.title}}</span>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="py-2" md="12" lg="8" sm="12">
          <span class="font-weight-black grey--text" style="font-size: 1rem">{{post.date}}, by Marco Trentini</span>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="py-6" md="12" lg="8" sm="12">
          <v-divider/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="py-0" md="12" lg="8" sm="12">
          <Editor
            :outline="true"
            class="pa-0"
            mode="viewer"
            nativeEmoji
            :renderConfig="renderConfig"
            v-model="post.content"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { db } from '../../firebase'
import { Editor } from 'vuetify-markdown-editor'

export default {
  name: 'BlogpostViewer',
  components: { Editor },
  created () {
    db.collection('blogposts').doc(this.$route.params.post_id).get()
      .then(response => {
        this.post = response.data()
      })
  },
  data () {
    return {
      post: {},
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
      }
    }
  }
}
</script>

<style scoped>

</style>
