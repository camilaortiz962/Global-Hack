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
