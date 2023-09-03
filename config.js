import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1WZF7UIJphPm3m2GTPRmIVfFAQKtGKF8",
  authDomain: "asistencia-escolar-d0f0a.firebaseapp.com",
  databaseURL: "https://asistencia-escolar-d0f0a-default-rtdb.firebaseio.com",
  projectId: "asistencia-escolar-d0f0a",
  storageBucket: "asistencia-escolar-d0f0a.appspot.com",
  messagingSenderId: "339968111558",
  appId: "1:339968111558:web:3fcecafd17cc8be5e378c7"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database()
 

  