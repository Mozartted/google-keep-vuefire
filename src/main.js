// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// var firebase = require('firebase/app')
// require('firebase/auth')
// require('firebase/database')
// calling both firebase and authentication

// var config = {
//     apiKey: "AIzaSyCng5VSjWXjCec_elvxEjw6ijYkq0ykjMQ",
//     authDomain: "gkeep-vuefire-596be.firebaseapp.com",
//     databaseURL: "https://gkeep-vuefire-596be.firebaseio.com",
//     storageBucket: "gkeep-vuefire-596be.appspot.com",
//     messagingSenderId: "173888201017"
//   }
// var appBase = firebase.initializeApp(config)
// let db = appBase.database()

// db.ref('notes').set([{title: 'Hello World' ,content: 'Lorem ipsum'}])

// db.ref('notes').on('value', (snapshot) => {
//   let notes = snapshot.val()
//   console.log(notes)
//   window.alert(notes[0].title)
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
