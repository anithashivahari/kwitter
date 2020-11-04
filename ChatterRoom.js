//FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCmdKo7LjurQYU_eiDjqGISsTfk0Htq3UM",
    authDomain: "kwitter-4a5ba.firebaseapp.com",
    databaseURL: "https://kwitter-4a5ba.firebaseio.com",
    projectId: "kwitter-4a5ba",
    storageBucket: "kwitter-4a5ba.appspot.com",
    messagingSenderId: "802201412897",
    appId: "1:802201412897:web:a0a71f5ba06ba29355ca60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("User Name");
document.getElementById("welcome").innerHTML="Welcome "+user_name;
  
  //Initialize Firebase



function Logout(){
    window.location="index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log(Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='DirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("rooms").innerHTML+=row;
    //Start code

    //End code
    });});}
getData();

function add_room(){
    var room_name=document.getElementById("add_room").value;
    localStorage.setItem("Added Room", room_name);
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room"
      });
}

function DirectToRoom(name){
    console.log(name);
    window.location="ChatterPage.html";
}