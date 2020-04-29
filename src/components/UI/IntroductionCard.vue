<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col md="5" sm="12">
        <v-card class="mx-auto lighten-1" flat>
          <v-card-title class="font-weight-black grey--text text--darken-2" style="font-size: 2rem">Hi, I'm Marco
          </v-card-title>
          <v-card-text class="font-weight-regular text--lighten-4" style="font-size: 1rem">
            I'm a Web Developer from Zurich <br>
            Currently I am working on my Bachelor of Science in Mechanical Engineering at ETH Zurich.<br> <br>
            Clean and simple design patterns are my speciality. I create projects myself and like to engineer them in an
            intuitive and understandable way. <br> <br>
            Do you have a project or idea you'd like to talk about? Let me know!<br><br>
            <v-btn class="lighten-1" color="primary" elevation="0" href="mailto:hello@thedivepit.com">
              hello@thedivepit.com
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="2" sm="12" >
        <v-img src="@/assets/undraw_code_thinking_1jeh.svg"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="7" sm="12">
        <v-divider/>
      </v-col>
    </v-row>
    <v-row class="mb-6" align="center" justify="center">
<!--      <v-col md="2" sm="12">-->
<!--        <v-img src="@/assets/undraw_choice_9385.svg"></v-img>-->
<!--      </v-col>-->
      <v-col md="7" sm="12">
        <v-card flat>
          <v-card-title class="font-weight-bold grey--text text--darken-2" style="font-size: 1.75rem">What am I working
            on
          </v-card-title>
          <v-card-text class="font-weight-regular text--lighten-4" style="font-size: 1rem">
            Currently I am mainly working on a student learning platform called napoly. <br><br>
            The goal is to make all relevant learning documents easily available to as many students as possible. This
            allows them to focus on their studies, making the time spent studying more efficient.
          </v-card-text>
          <v-card-text style="font-size: 1.5rem">
            <v-card class="pb-2" elevation="8" href="https://napoly.ch">
              <v-card-title class="font-weight-regular napoly--text muli" style="font-size: 1.5rem">napoly.ch

              </v-card-title>
              <v-card-subtitle class="pb-2 font-weight-light napoly--text text--lighten-1 muli">
                Student Document Repository
              </v-card-subtitle>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="7" sm="12">
        <v-divider/>
      </v-col>
    </v-row>
    <v-row class="mt-6" justify="center" align="center">
      <v-col md="7" sm="12">
        <v-card flat>
          <v-card-title class="font-weight-bold grey--text text--darken-2" style="font-size: 1.75rem">Project Blog
          </v-card-title>
          <v-card-text class="font-weight-regular text--lighten-4" style="font-size: 1rem">
            I often write little code projects where I solve a single problem. However I kept forgetting certain
            processes
            or solutions when I only wrote them once and then never used them again. <br> Therefore I decided to start a
            little
            project blog where I can document the things I learn and go check them when I need them again!
          </v-card-text>
          <v-card-text style="font-size: 1.5rem">
            <span class="grey--text text--darken-2 font-weight-medium" style="font-size: 1.5rem">Recent Posts</span>
            <v-card :key="post.id" :to="'/blog/'+post.id" class="mt-6" v-for="post in posts">
              <v-card-title class="font-weight-black grey--text">{{post.title}}
                <v-spacer/>
                <v-card-subtitle class="pb-2 font-weight-medium grey--text text--lighten-1">Created at: {{post.date}}
                </v-card-subtitle>
              </v-card-title>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
<!--      <v-col md="2" sm="12">-->
<!--        <v-img src="@/assets/undraw_blog_anyj.svg"></v-img>-->
<!--      </v-col>-->
    </v-row>
  </v-container>
</template>
<script>
import { db } from '@/firebase.js'

export default {
  name: 'IntroductionCard',
  created () {
    db.collection('blogposts').get()
      .then(response => {
        response.forEach(doc => {
          if (this.loggedIn || doc.data().public) {
            this.posts.push(doc.data())
          }
        })
      })
  },
  data () {
    return {
      posts: []
    }
  }
}
</script>
<style>
  .muli {
    font-family: "Muli" !important;
  }
</style>
