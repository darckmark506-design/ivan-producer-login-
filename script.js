// ================================
// CAMBIAR ENTRE LOGIN Y REGISTER
// ================================

function showLogin() {

    document.getElementById("loginTab")
        .classList.add("active");

    document.getElementById("registerTab")
        .classList.remove("active");

    document.getElementById("loginForm")
        .style.display = "block";

    document.getElementById("registerSection")
        .style.display = "block";
}


function showRegister() {

    document.getElementById("loginTab")
        .classList.remove("active");

    document.getElementById("registerTab")
        .classList.add("active");

    document.getElementById("registerSection")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ================================
// MOSTRAR / OCULTAR PASSWORD
// ================================

function togglePassword(inputId, icon) {

    const input = document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");
    }
}


// ================================
// LOGIN
// ================================

document
.getElementById("loginForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    if (!email || !password) {

        alert("Completa todos los campos.");

        return;
    }

    alert(
        "Login enviado correctamente.\n\n" +
        "La conexión con PHP + MySQL la agregaremos en el siguiente paso."
    );
});


// ================================
// REGISTER
// ================================

document
.getElementById("registerForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("registerEmail").value;

    const password =
        document.getElementById("registerPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (
        !name ||
        !email ||
        !password ||
        !confirmPassword
    ) {

        alert("Completa todos los campos.");

        return;
    }


    if (password !== confirmPassword) {

        alert("Las contraseñas no coinciden.");

        return;
    }


    if (password.length < 6) {

        alert(
            "La contraseña debe tener al menos 6 caracteres."
        );

        return;
    }


    alert(
        "Registro realizado correctamente.\n\n" +
        "Ahora podemos conectar este formulario a MySQL."
    );
});
