$(document).ready(function () {
  console.log("This is only a test");


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyChXQ8ezEKei-S6Q1ggciPxdKYKLbO7QZg",
    authDomain: "p1-looking-to-jam.firebaseapp.com",
    databaseURL: "https://p1-looking-to-jam.firebaseio.com",
    projectId: "p1-looking-to-jam",
    storageBucket: "p1-looking-to-jam.appspot.com",
    messagingSenderId: "618958973185"
  };
  firebase.initializeApp(config); //does not like this????

  var userData = firebase.database
  //user values
  var userName = "";
  var instrument = "";
  var addressMain = "";
  var address2 = "";
  var usercity = "";
  var userState = "";
  var userZip = "";


  // user sign in 
  $("#sign-in").on("click", function (event) {
    event.preventDefault();

    userName = $("#inputUserName4").val().trim();
    instrument = $("#inputInstrument4").val().trim();
    addressMain = $("#inputAddress").val().trim();
    address2 = $("#inputAddress2").val().trim();
    usercity = $("#inputCity").val().trim();
    userState = $("#inputState").val().trim();
    userZip = $("#inputZip").val().trim();

    // user info object
    var database = {
      userName: userName,
      instrument: instrument,
      addressMain: addressMain,
      address2: address2,
      usercity: usercity,
      userState: userState,
      userZip: userZip,
    }

    database.ref().push(userData);
  });//end of sign in object



});//end of document.ready





