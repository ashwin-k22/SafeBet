// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, set, onValue, DataSnapshot, get, child } from "firebase/database";
// import { getAuth } from "firebase/auth";
// import { data } from "browserslist";
// import { getStorage, ref, deleteObject } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDxe_4w7Ij8D8PQsVOWEiSFt-amfj3Vsvs",
//     authDomain: "safebets2.firebaseapp.com",
//     databaseURL: "https://safebets2-default-rtdb.firebaseio.com",
//     projectId: "safebets2",
//     storageBucket: "safebets2.appspot.com",
//     messagingSenderId: "411062049468",
//     appId: "1:411062049468:web:fbdae15a0d5800be3dceb9",
//     measurementId: "G-NHEZVPHMT9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const storage = getStorage();

// function deletePostData(postId){
//     const dbRef = ref(getDatabase(), postId);

//     deleteObject(dbRef).then(() => {
//         //File deleted successfully
//     }).catch((error) => {
//         //error occured
//     });
// }



// export default deletePostData;