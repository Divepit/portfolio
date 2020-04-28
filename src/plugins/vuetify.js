import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#6a96ff',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#3da4ea',
        success: '#26de81',
        warning: '#FFC107',
        napoly: '#3da4ea'
      }
    }
  }
})
