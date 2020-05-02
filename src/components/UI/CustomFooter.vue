<template>
    <v-footer class="lighten-3 grey--text opensans mt-12 pb-6 " color="grey" elevation="1">
        <v-container fluid>
            <v-row justify="center">
                <v-col md="6" lg="4" sm="12">
                    <span class="font-weight-black" style="font-size: 1.5rem">Hi, I'm Marco</span><br>
                    I'm a Web Developer from Zurich. <br>
                    Do you have a project or idea you'd like to talk about?<br>
                    Let me know! <br>
                    <a href="mailto:hello@thedivepit.com" style="text-decoration: none">hello@thedivepit.com</a>
                </v-col>
                <v-col md="6" lg="4" sm="12">
                    <span class="font-weight-black" style="font-size: 1.5rem">Find me on social media!</span><br>
                    <v-btn class="grey--text text-none pl-0" href="https://github.com/divepit" style="font-size: 1rem"
                           text>
                        <v-icon class="mr-2">mdi-github</v-icon>
                        GitHub
                    </v-btn>
                    <br>
                    <v-btn class="grey--text text-none pl-0" href="https://www.linkedin.com/in/marco-t-258240160/"
                           style="font-size: 1rem" text>
                        <v-icon class="mr-2">mdi-linkedin</v-icon>
                        LinkedIn
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>
<script>
export default {
  name: 'CustomFooter'
}
</script>
