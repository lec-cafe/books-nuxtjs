import Firebase from 'firebase/app'
import 'firebase/firestore'

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: "AIzaSyDAaFxaxAg8IE63VsYFLukQoldMew22omI",
    authDomain: "lc-nuxtjs-example-tasklist.firebaseapp.com",
    databaseURL: "https://lc-nuxtjs-example-tasklist.firebaseio.com",
    projectId: "lc-nuxtjs-example-tasklist",
    storageBucket: "lc-nuxtjs-example-tasklist.appspot.com",
    messagingSenderId: "509606064558",
    appId: "1:509606064558:web:7e8809c325a8cb0bd0d83f"
  });
}

export default (context, inject) => {
  const $fb = {
    app: Firebase.app,
    firestore: Firebase.firestore,
  }
  inject('fb',$fb)
}
