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