import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC9ZS_Y7aPzsOwrDMQUGmPJJIICMwjcXgc',
  authDomain: 'noconceptdev-b9a51.firebaseapp.com',
  projectId: 'noconceptdev-b9a51',
  storageBucket: 'noconceptdev-b9a51.appspot.com',
  messagingSenderId: '227636499227',
  appId: '1:227636499227:web:10dc79851f334762c1b9be'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
