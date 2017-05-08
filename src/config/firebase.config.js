import * as firebase from "firebase"

var config = {
    apiKey: "AIzaSyCng5VSjWXjCec_elvxEjw6ijYkq0ykjMQ",
    authDomain: "gkeep-vuefire-596be.firebaseapp.com",
    databaseURL: "https://gkeep-vuefire-596be.firebaseio.com",
    storageBucket: "gkeep-vuefire-596be.appspot.com",
    messagingSenderId: "173888201017"
}

let appBase = firebase.initializeApp(config)
let db = appBase.database()

export default {
	db: db
}
