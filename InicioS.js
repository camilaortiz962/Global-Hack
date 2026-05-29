const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const verificarPassword = document.getElementById("verificarPassword");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");
const mensajeVerificacion = document.getElementById("mensajeVerificacion");

nombre.addEventListener("input", () => {

    nombre.value = nombre.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

    if(nombre.value.length < 5){
        errorNombre.textContent = "Debe ingresar nombre y apellido";
    }else{
        errorNombre.textContent = "";
    }

});

correo.addEventListener("input", () => {

    const expresionCorreo =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!expresionCorreo.test(correo.value)){
        errorCorreo.textContent = "Correo electrónico inválido";
    }else{
        errorCorreo.textContent = "";
    }

});

password.addEventListener("input", () => {

    const expresionPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if(!expresionPassword.test(password.value)){
        errorPassword.textContent =
        "Mínimo 8 caracteres, un número y un carácter especial";
    }else{
        errorPassword.textContent = "";
    }

    validarCoincidencia();

});


verificarPassword.addEventListener("input", validarCoincidencia);

function validarCoincidencia(){

    if(verificarPassword.value === ""){
        mensajeVerificacion.textContent = "";
        return;
    }

    if(password.value === verificarPassword.value){

        mensajeVerificacion.textContent =
        "Las contraseñas coinciden";

        mensajeVerificacion.style.color = "green";

    }else{

        mensajeVerificacion.textContent =
        "Las contraseñas NO coinciden";

        mensajeVerificacion.style.color = "red";
    }

}

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    if(
        errorNombre.textContent === "" &&
        errorCorreo.textContent === "" &&
        errorPassword.textContent === "" &&
        password.value === verificarPassword.value &&
        nombre.value !== "" &&
        correo.value !== "" &&
        password.value !== ""
    ){

        alert("Formulario enviado correctamente");
        window.location.href = "index.html";

    }else{

        alert("Por favor complete correctamente el formulario");
    }

});