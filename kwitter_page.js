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
  username = localStorage.getItem("user_name")
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; 
  firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>"
         like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>"
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML +=row;
 } 
}); }); } 
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html")
}
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: username,
        message:msg,
        like:0
    })
document.getElementById("msg").innerHTML = "";
}
function updatelike(message_id){
  button_id = message_id
  likes = document.getElementById(button_id).value
  updated_like = Number(likes) + 1;
  firebase.database().ref(room_name).child(message_id).update({
        like:updated_like
  });
}