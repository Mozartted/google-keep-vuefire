<template>

</template>

<script>

var firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

var config = {
    apiKey: "AIzaSyCng5VSjWXjCec_elvxEjw6ijYkq0ykjMQ",
    authDomain: "gkeep-vuefire-596be.firebaseapp.com",
    databaseURL: "https://gkeep-vuefire-596be.firebaseio.com",
    storageBucket: "gkeep-vuefire-596be.appspot.com",
    messagingSenderId: "173888201017"
  }

export default{
	data:function(){
		return {
       		notes: []
     	}
	},
	ready:function(){
		 var appBase = firebase.initializeApp(config)
		let db = appBase.database()

		db.ref().child('notes').set([{title: 'Hello World' ,content: 'Lorem ipsum'}])
		db.ref().child('notes').on('value', (snapshot) => {
  			let note = snapshot.val()
       		this.notes.unshift(note)
		})
	}
}

</script>

<style>
	

</style>