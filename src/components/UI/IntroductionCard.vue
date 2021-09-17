<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="mt-12 pt-12 pb-12 pt-md-0 pb-md-0 mb-sm-12 mb-6">
      <v-col md="8" lg="8" sm="12">
        <v-card class="lighten-1 transparent" flat>
          <v-card-title class="font-weight-black grey--text text--darken-2 hidden-md-and-up" style="font-size: 2.9rem; word-break: keep-all">Hi, I'm Marco</v-card-title>
          <v-card-title class="font-weight-black grey--text text--darken-2 hidden-sm-and-down" style="font-size: 3.5rem; word-break: keep-all">Hi, I'm Marco</v-card-title>
          <v-card-text class="font-weight-regular text--lighten-4 mt-6" style="font-size: 1.25rem">
            <span style="font-size: 1.25rem;" class="grey--text">I'm a Web Developer from Zurich </span><br><br>
            Currently I am working on my Bachelor of Science in Mechanical Engineering at ETH Zurich.<br> <br>
            <span class="hidden-sm-and-down">Clean and simple design patterns are my speciality. I create projects myself and like to engineer them in an
            intuitive and understandable way. <br> <br></span>
            Do you have a project or idea you'd like to talk about? Let me know!<br><br>
            <v-btn x-large outlined class="text-none" color="primary" elevation="0" href="mailto:hello@thedivepit.com">
              hello@thedivepit.com
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
<!--      <v-col md="4" lg="2" sm="12" >-->
<!--        <v-img src="@/assets/undraw_code_thinking_1jeh.svg"></v-img>-->
<!--      </v-col>-->
    </v-row>
    <v-row justify="center" >
      <v-col md="12" lg="8" sm="12">
        <v-divider/>
      </v-col>
    </v-row>
    <v-row class="mt-6 mb-6" justify="center" align="center">
      <v-col md="12" lg="8" sm="12">
        <v-card flat class="transparent">
          <v-card-title class="font-weight-bold grey--text text--darken-2" style="font-size: 1.75rem">Project Blog
          </v-card-title>
          <v-card-text class="font-weight-regular text--lighten-4" style="font-size: 1.25rem">
            <span style="font-size: 1.25rem;" class="grey--text">I often write little code projects where I solve a single problem. <span class="hidden-sm-and-down">However I kept forgetting certain
              processes or solutions when I only wrote them once and then never used them again.</span></span> <br><br>
              Therefore I decided to start a
            little
            project blog where I can document the things I learn<span class="hidden-md-and-up">.</span><span class="hidden-sm-and-down"> and go check them when I need them again!</span>
          </v-card-text>
          <v-card-text style="font-size: 1.5rem">
<!--            <span class="grey&#45;&#45;text text&#45;&#45;darken-2 font-weight-medium" style="font-size: 1.5rem">Recent Posts</span>-->
            <v-card :key="post.id" :to="'/blog/'+post.id" class="mt-2" v-for="post in posts.slice(0,4)" flat outlined>
              <v-card-title class="font-weight-light grey--text body-1">{{post.date}} <span class="hidden-sm-and-down mx-2"> – </span><br class="hidden-md-and-up"> {{post.title}}
              </v-card-title>
            </v-card>
            <v-card class="mt-2" flat to="blog" outlined  >
              <v-card-title class="font-weight-light grey--text body-1">View more ...</v-card-title>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
<!--      <v-col md="2" sm="12">-->
<!--        <v-img src="@/assets/undraw_blog_anyj.svg"></v-img>-->
<!--      </v-col>-->
    </v-row>
    <v-row justify="center">
      <v-col md="12" lg="8" sm="12">
        <v-divider/>
      </v-col>
    </v-row>
    <v-row class="mb-6 mt-6" align="center" justify="center">
      <!--      <v-col md="2" sm="12">-->
      <!--        <v-img src="@/assets/undraw_choice_9385.svg"></v-img>-->
      <!--      </v-col>-->
      <v-col md="6" lg="8" sm="6">
        <v-card class="transparent" flat>
          <v-card-title class="font-weight-bold grey--text text--darken-2" style="font-size: 1.75rem">What am I working
            on
          </v-card-title>
<!--          <v-card-text class="font-weight-regular text&#45;&#45;lighten-4" style="font-size: 1.25rem">-->
<!--            <span style="font-size: 1.25rem;" class="grey&#45;&#45;text">Currently I am mainly working on a student learning platform called napoly.</span> <br><br>-->
<!--            The goal is to make all relevant learning documents easily available to as many students as possible. <span class="hidden-sm-and-down">This-->
<!--            allows them to focus on their studies, making the time spent studying more efficient.</span>-->
<!--          </v-card-text>-->
          <v-card-text class="font-weight-regular text&#45;&#45;lighten-4" style="font-size: 1.25rem">
            <span style="font-size: 1.25rem;" class="grey--text">Past and current projects</span>
          </v-card-text>
          <v-card-text style="font-size: 1.5rem">
            <v-card class="pb-2" href="https://napoly.ch" target="_blank" outlined color="primary">
              <v-card-title class="font-weight-regular white--text muli" style="font-size: 1.5rem">napoly.ch
              </v-card-title>
              <v-card-subtitle class="pb-2 font-weight-light white--text muli">
                Student Document Repository
              </v-card-subtitle>
            </v-card>
            <v-card class="pb-2 mt-2" href="https://dyana.ethz.ch" target="_blank" outlined color="primary">
              <v-card-title class="font-weight-regular white--text muli" style="font-size: 1.5rem">Project Dyana
              </v-card-title>
              <v-card-subtitle class="pb-2 font-weight-light white--text muli">
                Dynamic Animatronic Quadrupedal
              </v-card-subtitle>
            </v-card>
            <v-card class="pb-2 mt-2" href="https://www.divestore.ch/shop/" target="_blank" outlined color="primary">
              <v-card-title class="font-weight-regular white--text muli" style="font-size: 1.5rem">Divestore.ch
              </v-card-title>
              <v-card-subtitle class="pb-2 font-weight-light white--text muli">
                Onlineshop of Tauchsport Uster AG
              </v-card-subtitle>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
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
        this.posts.sort((b, a) => (Date.parse(a.date) > Date.parse(b.date)) ? 1 : -1)
        this.posts.pop(this.posts.length - 3)
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
