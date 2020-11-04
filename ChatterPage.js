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
var room_name=localStorage.getItem("Added Room");

function send(){
   var msg=document.getElementById("message_input").value; 
   firebase.database().ref(room_name).push({
       name: user_name,
       message: msg,
       Likes: 0
   });
   document.getElementById("message_input").value="";
}

function logout(){
    window.location="index.html";
}

var firebase_message_id;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("messages").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
    firebase_message_id = childKey; 
    console.log(firebase_message_id);
    message_data = childData;
    console.log(message_data);

    var Name=message_data['name'];
    var Likes=message_data['Likes'];
    var Message=message_data['message'];
    var Name_tag="<h4 class='name'>"+Name+" <img id='tick' src='tick.png'>"+"</h4>";
    var Likes_tag="<button id="+firebase_message_id+" onclick='Update_likes(this.id)'> <i class='fa fa-thumbs-up'> Likes: "+Likes+"</button>";
    var Message_tag="<h5 class='message'>"+Message+"</h5>";

var complete_message=Name_tag+Message_tag+Likes_tag;

document.getElementById("messages").innerHTML+=complete_message;
} }); }); }

getData();



function Update_likes(message_id){
  console.log("Click on the like button: "+message_id);
  button_id=message_id;
  var likes_no=document.getElementById(button_id).value;
  var updated_likes=Number(likes_no) + 1;
  console.log("Updated Likes: "+updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
      Likes : updated_likes
  });
 
}