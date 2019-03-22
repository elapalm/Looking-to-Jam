$(document).ready(function () {

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


  //database variable
  const database = firebase.database();
  let counter = 0;
  // user sign in listner
  $("#sign-in").on("click", function (event) {
    event.preventDefault();

    //user values
  

    let userName = $("#inputUserName4").val().trim();
    let instrument = $("#inputInstrument4").val().trim();
    let addressMain = $("#inputAddress").val().trim();
    let address2 = $("#inputAddress2").val().trim();
    let usercity = $("#inputCity").val().trim();
    let userState = $("#inputState").val().trim();
    let userZip = $("#inputZip").val().trim();
    let adSub = $("#ad-subject").val().trim();
    let comment = $("#comments").val().trim();

    // user info object
    let userData = {
      userName: userName,
      instrument: instrument,
      addressMain: addressMain,
      address2: address2,
      usercity: usercity,
      userState: userState,
      userZip: userZip,
      adSub: adSub,
      comment: comment

    }//end of userData Object

    //push information to the database
    database.ref().child("/users/user" + counter++).set(userData);
    
    $("#inputUserName4").val();
    $("#inputInstrument4").val();
    $("#inputAddress").val();
    $("#inputAddress2").val();
    $("#inputCity").val();
    $("#inputState").val();
    $("#inputZip").val();
    $("#ad-subject").val();
    $("#comments").val();

  });//end of sign in listner

});//end of document.ready
