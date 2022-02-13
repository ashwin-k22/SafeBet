// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue, DataSnapshot, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import { data } from "browserslist";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxe_4w7Ij8D8PQsVOWEiSFt-amfj3Vsvs",
  authDomain: "safebets2.firebaseapp.com",
  databaseURL: "https://safebets2-default-rtdb.firebaseio.com",
  projectId: "safebets2",
  storageBucket: "safebets2.appspot.com",
  messagingSenderId: "411062049468",
  appId: "1:411062049468:web:fbdae15a0d5800be3dceb9",
  measurementId: "G-NHEZVPHMT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function readPostData(nameEntrepeneur) {

  firebase.database().ref('post').on('value', (snap) => {
    console.log(snap.val)
  })

  // var leadsRef = database.ref('post');
  // leadsRef.on('value', function(snapshot) {
  //     // snapshot.forEach(function(childSnapshot) {
  //       var childData = snapshot.node_.children_.root_.value.value_;
  //       console.log("snapshot.node_.children_.root_.value.value_: ", snapshot.node_.children_.root_.value.value_)
  //     // });
  // });

  // const db = getDatabase();
  // const postRef = ref(db, 'posts/' + nameEntrepeneur);
  // onValue(postRef, (snapshot) => {
  //   const data = snapshot.val();
  // });

  // return data;

  // const dbRef = ref(getDatabase());
  // get(child(dbRef, `post/${name}`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     //console.log(snapshot.val());
  //     const a = snapshot.val();
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  //   const a = 10;

  //   return a;
  // });

  // firebase.initializeApp(firebaseConfig);
  // var firebaseRef = firebase.database().ref("post/" + postId);
  // firebaseRef.once("value" , function(snapshot) {
  //     snapshot.forEach(function(element){
  //         console.log(element.val());
  //     });
  // })

  // const db = getDatabase();
  // const auth = getAuth();

  // const userId = auth.currentUser.uid;
  // return onValue(ref(db, '/users/' + userId), (snapshot) => {
  //     const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  //     // ...
  // }, {
  //     onlyOnce: true
  // });

}

export default readPostData;