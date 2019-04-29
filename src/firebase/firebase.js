import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAKf3b09shh-8mI0wrjgA6t6FsNzB_eDs4",
    authDomain: "musiclist-stefan.firebaseapp.com",
    databaseURL: "https://musiclist-stefan.firebaseio.com",
    projectId: "musiclist-stefan",
    storageBucket: "musiclist-stefan.appspot.com",
    messagingSenderId: "327246649713"
  }
  firebase.initializeApp(config)

  firebase.database().ref().set({test: 'StefanG'})