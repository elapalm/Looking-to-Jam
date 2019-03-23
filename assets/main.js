$(document).ready(function () {
  //loadGmapAPI();

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
  let latArr = [];
  let lngArr = [];
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
    // Get a key for the new users entry
    var userKey = database.ref().child("/user/").push().key;

    //push information to the database
    database.ref("/user/" + userKey).set(userData);

    $("#inputUserName4").val("");
    $("#inputInstrument4").val("");
    $("#inputAddress").val("");
    $("#inputAddress2").val("");
    $("#inputCity").val("");
    $("#inputState").val("");
    $("#inputZip").val("");
    $("#ad-subject").val("");
    $("#comments").val("");

  });//end of sign in listner


  //database listener when a user is added to the database
  database.ref("/user/").on("child_added", function (snapshot) {


    //created needed divs
    let newRow = $("<div>");
    let newFormDiv = $("<div>");
    let newuserNameDiv = $("<div>");

    //Added classes for bootstrap    
    newRow.attr("class", "row formPost");
    newFormDiv.attr("class", "col-sm-9");
    newuserNameDiv.attr("class", "col-sm-3");

    //pull data need to post to the data base.
    newFormDiv.html("<h4>" + snapshot.val().adSub + "</h4> <hr> <p>" + snapshot.val().comment + "</p>");
    newuserNameDiv.html("<h4><a href='userProPage.html'>" + snapshot.val().userName + "</a></h4>");

    //append col to the row that will be added to the page
    newRow.append(newFormDiv);
    newRow.append(newuserNameDiv);

    //Add the forum to landing page.
    $(".forum").append(newRow);

  });

  //Used to retrieve the address from the database
  database.ref("user").on("value", function (snapshot) {
    if (snapshot.val() != null) {
      let data = snapshot.val();
      let keys = Object.keys(data);

      for (let i in keys) {
        let k = keys[i];
        let address = data[k].addressMain + ", " + data[k].usercity + " " + data[k].userState;
        addresToLatLng(address);
      }


    }
    else {
      console.log("Error, data base is empty.");
    }

  });

  $(document).on("click", ".login", function(){
    console.log("clicked");
  });



  function addresToLatLng(str) {

    //Google geolocation API
    let address = str;

    queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDTD77T70LdIBZsEwh1nXNqGor3B0oQbYk";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        let lat = response.results[0].geometry.location.lat;

        let lng = response.results[0].geometry.location.lng;

        console.log(lat);
        console.log(lng);

        latArr.push(lat);
        lngArr.push(lng);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  waitingOnGoogle();

  function waitingOnGoogle() {
    setTimeout(function () {
      initMap();
    }, 15000);
}



  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 32.2226, lng: -110.9747 },
      zoom: 12
    });

    for(let i in latArr){
      var userLatLng = {lat: latArr[i], lng: lngArr[i]};
      var marker = new google.maps.Marker({
        position: userLatLng,
        map: map,
      });

    }
    
  
  }

  function loadGmapAPI() {
    console.log("a");
    let newScript = $("<script>");
    newScript.attr("type", "text/javascript");
    newScript.attr("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyDTD77T70LdIBZsEwh1nXNqGor3B0oQbYk");

    $("head").append(newScript);

  }




});//end of document.ready
