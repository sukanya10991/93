function login() {
    username = document.getElementById("username").value;
    localStorage.setItem("user_username", username);
    window.location = "room.html"
}