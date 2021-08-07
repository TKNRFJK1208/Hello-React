import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdt5YeX-uPgehOAKh-jMpXFe4drKC94gQ",
  authDomain: "react-contact-form-806ee.firebaseapp.com",
  projectId: "react-contact-form-806ee",
  storageBucket: "react-contact-form-806ee.appspot.com",
  messagingSenderId: "963953072023",
  appId: "1:963953072023:web:10060844c0648bc1f6d6d2",
  measurementId: "G-0B7QK1GVKL"
});

var db = firebaseApp.firestore();

export { db };