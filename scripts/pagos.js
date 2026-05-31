const nombre = document.getElementById("nombre");
const documento = document.getElementById("documento");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");



document.getElementById("continuar").addEventListener("click", () => {

    let valido = true;

    document.querySelectorAll("small").forEach(item => {
        item.textContent = "";
    });

    document.querySelectorAll(".error").forEach(item => {
        item.classList.remove("error");
    });


    if(nombre.value.trim().length < 3){

        nombre.classList.add("error");

        document.getElementById("errorNombre").textContent =
        "Ingrese un nombre válido.";

        valido = false;
    }

    if(!/^[0-9]{6,15}$/.test(documento.value.trim())){

        documento.classList.add("error");

        document.getElementById("errorDocumento").textContent =
        "Debe contener entre 6 y 15 números.";

        valido = false;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())){

        correo.classList.add("error");

        document.getElementById("errorCorreo").textContent =
        "Correo electrónico inválido.";

        valido = false;
    }


    if(!/^[0-9]{10}$/.test(telefono.value.trim())){

        telefono.classList.add("error");

        document.getElementById("errorTelefono").textContent =
        "Debe contener 10 números.";

        valido = false;
    }

    if(!valido) return;

    document.getElementById("paso1")
    .classList.remove("mostrar");

    document.getElementById("paso2")
    .classList.add("mostrar");

    document.getElementById("circulo1")
    .classList.remove("activo");

    document.getElementById("circulo2")
    .classList.add("activo");

});

document.getElementById("volver")
.addEventListener("click", () => {

    document.getElementById("paso2")
    .classList.remove("mostrar");

    document.getElementById("paso1")
    .classList.add("mostrar");

    document.getElementById("circulo2")
    .classList.remove("activo");

    document.getElementById("circulo1")
    .classList.add("activo");

});


const metodos =
document.querySelectorAll(".metodo");

const paneles =
document.querySelectorAll(".panel-pago");

metodos.forEach(metodo => {

    metodo.addEventListener("click", () => {

        metodos.forEach(item => {
            item.classList.remove("activo");
        });

        paneles.forEach(item => {
            item.classList.remove("mostrar");
        });

        metodo.classList.add("activo");

        document
        .getElementById(metodo.dataset.metodo)
        .classList.add("mostrar");

    });

});

documento.addEventListener("input", () => {
    documento.value =
    documento.value.replace(/\D/g, "");
});

telefono.addEventListener("input", () => {
    telefono.value =
    telefono.value.replace(/\D/g, "");
});

document.getElementById("btnPagar")
.addEventListener("click", () => {

    const acepto =
    document.getElementById("acepto");

    if(!acepto.checked){

        alert("Debe aceptar las condiciones.");
        return;
    }

    const metodo =
    document.querySelector(".metodo.activo")
    .dataset.metodo;

    if(metodo === "tarjeta"){

        const numeroTarjeta =
        document.getElementById("numeroTarjeta");

        const titular =
        document.getElementById("titular");

        const fecha =
        document.getElementById("fecha");

        const cvv =
        document.getElementById("cvv");

        if(numeroTarjeta.value.trim().length !== 16){

            alert("Ingrese un número de tarjeta válido.");
            numeroTarjeta.focus();
            return;
        }

        if(titular.value.trim().length < 3){

            alert("Ingrese el nombre del titular.");
            titular.focus();
            return;
        }

        if(fecha.value.trim() === ""){

            alert("Ingrese la fecha de vencimiento.");
            fecha.focus();
            return;
        }

        if(cvv.value.trim().length < 3){

            alert("Ingrese un CVV válido.");
            cvv.focus();
            return;
        }

        alert("Pago con tarjeta procesado correctamente.");
    }

    if(metodo === "pse"){

        const banco =
        document.getElementById("banco");

        if(banco.value === ""){

            alert("Seleccione un banco.");
            banco.focus();
            return;
        }

        alert("Redirigiendo a PSE...");
    }

    if(metodo === "nequi"){

        const numeroNequi =
        document.getElementById("numeroNequi");

        if(!/^[0-9]{10}$/.test(numeroNequi.value)){

            alert("Ingrese un número Nequi válido.");
            numeroNequi.focus();
            return;
        }

        alert("Solicitud enviada a Nequi.");
    }


    if(metodo === "daviplata"){

        const numeroDaviplata =
        document.getElementById("numeroDaviplata");

        if(!/^[0-9]{10}$/.test(numeroDaviplata.value)){

            alert("Ingrese un número Daviplata válido.");
            numeroDaviplata.focus();
            return;
        }

        alert("Solicitud enviada a Daviplata.");
    }

});

