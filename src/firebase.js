import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyCRg0055IRCSldOKVhur_ipCAHlJpo155U',
  authDomain: 'divepit-portfolio-ii.firebaseapp.com',
  databaseURL: 'https://divepit-portfolio-ii.firebaseio.com',
  projectId: 'divepit-portfolio-ii',
  storageBucket: 'divepit-portfolio-ii.appspot.com',
  messagingSenderId: '484711374493',
  appId: '1:484711374493:web:4e4148e3137b225bdc7e74'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

export {
  db,
  auth,
  currentUser
}
