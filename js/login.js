// login.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Obtiene los valores ingresados
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    // Verifica si los datos son correctos (puedes personalizar esto)
    if (user === "cenfo" && password === "123") {
        window.location.href = "landing.html"; // Redirige si son correctos
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});