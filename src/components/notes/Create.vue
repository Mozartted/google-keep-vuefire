<template>
  <form class="create-note" v-on:submit.prevent="createNote()">
    <input name="title" v-model="title" placeholder="Title"/>
    <textarea name="content" v-model="content" placeholder="Text goes here..." rows="3">
    </textarea>
    <button type="submit">+</button>
  </form>
</template>
<script>
	import * as firebase from 'firebase'
	let config = {
    apiKey: "AIzaSyCng5VSjWXjCec_elvxEjw6ijYkq0ykjMQ",
    authDomain: "gkeep-vuefire-596be.firebaseapp.com",
    databaseURL: "https://gkeep-vuefire-596be.firebaseio.com",
    storageBucket: "gkeep-vuefire-596be.appspot.com",
    messagingSenderId: "173888201017"
  }

  let appBase = firebase.initializeApp(config)
		let db = appBase.database()

	export default{
		data () {
			return {
				title: '',
				content: ''
			}
		},
		methods: {
			createNote () {
				if (this.title.trim()||this.content.trim()) {
					db.ref('notes').push({title: this.title,content: this.content},(res,err) => {
						if (err) {
              				throw err
            			}
            			this.title = ''
            			this.content = ''
					})
				}
			}
		}

	}
</script>
<style>
  form.create-note{
    position: relative;
    width: 480px;
    margin: 15px auto;
    background: #fff;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 5px #ccc;
  }
  form.create-note input, form.create-note textarea{
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
  }
  form.create-note button{
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #41b883;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    cursor: pointer;
    outline: none;
  }
</style>