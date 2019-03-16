$(document).ready(function(){
    console.log("This is only a test");
});

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyChXQ8ezEKei-S6Q1ggciPxdKYKLbO7QZg",
    authDomain: "p1-looking-to-jam.firebaseapp.com",
    databaseURL: "https://p1-looking-to-jam.firebaseio.com",
    projectId: "p1-looking-to-jam",
    storageBucket: "p1-looking-to-jam.appspot.com",
    messagingSenderId: "618958973185"
  };
  firebase.initializeApp(config);