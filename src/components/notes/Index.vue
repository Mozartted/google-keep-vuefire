<template>
  <div class="notes">
    <note 
      v-for="note in notes"
      :note="note"
      >
    </note>
  </div>
</template>

<script>

import * as firebase from "firebase"
import Note from './Note'
// setting up firebase configurations
// var config = {
//     apiKey: "AIzaSyCng5VSjWXjCec_elvxEjw6ijYkq0ykjMQ",
//     authDomain: "gkeep-vuefire-596be.firebaseapp.com",
//     databaseURL: "https://gkeep-vuefire-596be.firebaseio.com",
//     storageBucket: "gkeep-vuefire-596be.appspot.com",
//     messagingSenderId: "173888201017"
//   }

export default{
	// setting up views data attribute
	// data () {
	// 	return {
 //       		notes: []
 //     	}
	// },
	// mounted () {
	// 	let appBase = firebase.initializeApp(config)
	// 	let db = appBase.database()
	// 	db.ref('notes').on('value',(snapshot) => {
 //  			let note = snapshot.val()
 //       		this.notes.unshift(note)
 //          console.log(note)
	// 	})
	// }
  components: {
    Note
  }
}

</script>
<style>
 .notes{
    padding: 0 100px;
  }	

</style>
