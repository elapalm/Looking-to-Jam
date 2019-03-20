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

    //display user information on html page

    let userDataRef = firebase.database().ref(userData).orderByKey();
    userDataRef.once("value").then(function(snapshot){
      snapshot.forEach(function(snapshot){

        var userNameVal = childSnapshot.val().userName;

        $("#user-name").append(userNameVal);
      })
    })
        


    //add user information- about, instrument, skill level, genre, links to music
    function editable() {
        var h1 = document.getElementsByTagName("H1")[0];
        var att = document.createAttribute("contenteditable");
        att.value = "true";
        h1.setAttributeNode(att);
      }
      
      function noteditable() {
        var h1 = document.getElementsByTagName("H1")[0];
        var att = document.createAttribute("contenteditable");
        att.value = "flase";
        h1.setAttributeNode(att);
      }
      $('.my-button').click(function() {
        $(".my-textbox").focus()
      });
      $('.my-button2').click(function() {
        $(".button").focus()
      });


    
});//end of document.ready