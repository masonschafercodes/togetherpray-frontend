import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCX3tGIlOFYWTaf1mMjOyy2i6TsD--kZz8",
    authDomain: "versewithusproject.firebaseapp.com",
    databaseURL: "https://versewithusproject.firebaseio.com",
    projectId: "versewithusproject",
    storageBucket: "versewithusproject.appspot.com",
    messagingSenderId: "156776290002",
    appId: "1:156776290002:web:18c5534d7cabd08a4f7f0b"
  };



  firebase.initializeApp(firebaseConfig);

  export default firebase;