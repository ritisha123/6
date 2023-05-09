var firebaseConfig = {
    apiKey: "AIzaSyCu-B4Dh0P-YhZrU0O5UKHt1ZC2Zs_U2G4",
    authDomain: "project-93-19e69.firebaseapp.com",
    databaseURL: "https://project-93-19e69-default-rtdb.firebaseio.com",
    projectId: "project-93-19e69",
    storageBucket: "project-93-19e69.appspot.com",
    messagingSenderId: "1019975419856",
    appId: "1:1019975419856:web:7b2b554a432c2454181bd5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();