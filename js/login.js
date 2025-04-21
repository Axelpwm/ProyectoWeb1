

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;


    if (user === "cenfo" && password === "123") {
        window.location.href = "landing.html"; 
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});