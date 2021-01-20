username = localStorage.getItem("user_name")
  var firebaseConfig = {
    apiKey: "AIzaSyB29BvWq8izAtb8Ie35Gey_jJdKRPa2ptQ",
    authDomain: "kwiiiiiiiiter.firebaseapp.com",
    databaseURL: "https://kwiiiiiiiiter-default-rtdb.firebaseio.com",
    projectId: "kwiiiiiiiiter",
    storageBucket: "kwiiiiiiiiter.appspot.com",
    messagingSenderId: "215602381314",
    appId: "1:215602381314:web:10292ffc5080566a4e9d1b"
  };
  firebase.initializeApp(firebaseConfig);
  function addroom(){
      room_name = document.getElementById("room").value;
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name)
  window.location = "kwitter_page.html"
  }  

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
   Room_names = childKey;
   console.log("room name- " + Room_names)
   row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   });});}
  getData();

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name)
    window.location="kwitter_page.html";
}
document.getElementById("username").innerHTML="welcome " + username + "!"