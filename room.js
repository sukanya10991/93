var firebaseConfig = {
    apiKey: "AIzaSyDg-2nbFXw0mC3R4p_wtCKKXQldMtePMm4",
    authDomain: "minecraftchat-3bc04.firebaseapp.com",
    databaseURL: "https://minecraftchat-3bc04-default-rtdb.firebaseio.com",
    projectId: "minecraftchat-3bc04",
    storageBucket: "minecraftchat-3bc04.appspot.com",
    messagingSenderId: "633302403578",
    appId: "1:633302403578:web:2c06ce3abe38dfdf63bc43"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);     
  
  hello=localStorage.getItem("user_username");
  document.getElementById("welnname").innerHTML="Welcome!"+hello;
  function addroom(){
    room_name=document.getElementById("addroom").value;
    text="Please enter room name";
    if(room_name==" "){
        document.getElementById("empty").innerHTML=text;        
    }
    else{
        room_name1=document.getElementById("addroom").value;
        document.getElementById("s").innerHTML=room_name;
    }
    if(room_name1==" "){
        document.getElementById("empty").innerHTML=text;
    }
    else{
        room_name2=document.getElementById("addroom").value;
        document.getElementById("u").innerHTML=room_name1;
    }
    if(room_name2==" "){
        document.getElementById("empty").innerHTML=text;
    }
    else{
        room_name3=document.getElementById("addroom").value;
        document.getElementById("k").innerHTML=room_name2;
    }
    if(room_name3==" "){
        document.getElementById("empty").innerHTML=text;
    }
    else{
        document.getElementById("uo").innerHTML=room_name3;
    }
}
function request(){
    window.location="request.html";
} 