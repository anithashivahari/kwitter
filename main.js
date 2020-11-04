function addUser(){
    var username=document.getElementById("user_name").value;

    localStorage.setItem("User Name",username);
    window.location="ChatterRoom.html";
}