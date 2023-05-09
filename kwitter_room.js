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
    
    
  
  
    function add_room() 
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose : "add room name"
          });
              
          localStorage.setItem("room_name", room_name);
          window.location = "Kwitter_page.html";
    }
    
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
           console.log("Room_names - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row;
          //End code
          });});}
    getData();
    
    function redirectToRoomName(name)
    {
    
          console.log(name);
          localStorage.setItem("room_name" , name);
          window.location = "kwitter_page.html";
    }
    
    function logout() {
    
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }