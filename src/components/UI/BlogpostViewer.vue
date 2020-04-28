<template>
  <v-container>
    <v-row justify="center">
      <v-col class="pb-0" md="6" sm="12">
        <v-btn color="primary" outlined to="/blog">
          <v-icon>mdi-left</v-icon>
          All posts
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="pb-0 pt-6" md="6" sm="12">
        <span class="font-weight-black" style="font-size: 2rem"><v-divider class="mr-2" vertical/>{{post.title}}</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="py-0" md="6" sm="12">
        <span class="font-weight-black grey--text" style="font-size: 1rem"><v-divider class="mr-2" vertical/> Created: {{post.date}}</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="py-0" md="6" sm="12">
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
  </v-container>
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
        post: {}
      }
    }
  }
</script>

<style scoped>

</style>
