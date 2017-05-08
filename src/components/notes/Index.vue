<template>
  <div class="notes">
    <note 
      v-for="note in notes"
      v-bind:note="note"
      >
    </note>
  </div>
</template>

<script>

import FirebaseConf from "../../config/firebase.config"
import Note from './Note'

export default{
	// setting up views data attribute
	data () {
		return {
       		notes: []
     	}
	},
	mounted () {
		FirebaseConf.db.ref('notes').on('value',(snapshot) => {
  			let note = snapshot.val()
        for (var key in note) {
          if (note.hasOwnProperty(key)) {
            this.notes.unshift(note[key])
          }
        }
		})

    console.log(this.notes)
	},
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
