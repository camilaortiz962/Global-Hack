const preguntas = document.querySelectorAll(".faq-pregunta");

preguntas.forEach((pregunta) => {
    pregunta.addEventListener("click", () => {
        const item = pregunta.parentElement;
        const respuesta = item.querySelector(".faq-respuesta");
        const icono = pregunta.querySelector("span");

        item.classList.toggle("activo");

        if (item.classList.contains("activo")) {
            respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            icono.textContent = "−";
        } else {
            respuesta.style.maxHeight = null;
            icono.textContent = "+";
        }
    });
});

const botonesFormulario = document.querySelectorAll(".abrir-formulario");
const modalFormulario = document.querySelector("#formularioContacto");
const cerrarFormulario = document.querySelector(".cerrar-formulario");
const tipoConsulta = document.querySelector("#consulta");

botonesFormulario.forEach((boton) => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();

        modalFormulario.classList.add("activo");
        document.body.classList.add("modal-abierto");

        const tipo = boton.dataset.tipo;

        if (tipoConsulta && tipo === "Agenda tu cita") {
            tipoConsulta.value = "asesoria";
        }

        if (tipoConsulta && tipo === "Servicio al cliente") {
            tipoConsulta.value = "mayor-informacion";
        }
    });
});

cerrarFormulario.addEventListener("click", () => {
    modalFormulario.classList.remove("activo");
    document.body.classList.remove("modal-abierto");
});

modalFormulario.addEventListener("click", (event) => {
    if (event.target === modalFormulario) {
        modalFormulario.classList.remove("activo");
        document.body.classList.remove("modal-abierto");
    }
});