import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDNCWDkuzMlMbJR4hZi_YI89Xzb5moFxic',
  authDomain: 'next-todo-59811.firebaseapp.com',
  projectId: 'next-todo-59811',
  storageBucket: 'next-todo-59811.appspot.com',
  messagingSenderId: '835399240860',
  appId: '1:835399240860:web:ccb945652755a220e6b159'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
