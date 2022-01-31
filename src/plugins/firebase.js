import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
        apiKey: "AIzaSyBJAgbGX1c61Aiim2ykDilKFG9s5V7z4zE",
        authDomain: "site-projeto-f21aa.firebaseapp.com",
        projectId: "site-projeto-f21aa",
        storageBucket: "site-projeto-f21aa.appspot.com",
        messagingSenderId: "206771737681",
        appId: "1:206771737681:web:2a5dcef59680c271431470"
      };

      firebase.initializeApp(firebaseConfig)

      const db = firebase.firestore()
      const auth = firebase.auth()

      const profileCollection = db.collection('profile')
      const noticiasCollection = db.collection('noticias')

      export {
          db, auth, profileCollection, noticiasCollection
      }