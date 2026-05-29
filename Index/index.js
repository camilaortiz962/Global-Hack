
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

if (cerrarFormulario) {
    cerrarFormulario.addEventListener("click", () => {
        modalFormulario.classList.remove("activo");
        document.body.classList.remove("modal-abierto");
    });
}

if (modalFormulario) {
    modalFormulario.addEventListener("click", (event) => {
        if (event.target === modalFormulario) {
            modalFormulario.classList.remove("activo");
            document.body.classList.remove("modal-abierto");
        }
    });
}

const seguros = {
    platino: {
        titulo: "GlobalUniversidad Garantizada Platino",
        intro: "Solución educativa que garantiza el pago del 100% del valor de la matrícula ordinaria para pregrado en Colombia.",
        bloques: [
            ["Cobertura educativa", "Garantiza el pago del 100% del valor de la matrícula ordinaria."],
            ["Lugar de cobertura", "Aplica para cualquier carrera de pregrado en cualquier universidad en Colombia."],
            ["Periodos de cobertura", "Cubre hasta cinco (5) años de periodos académicos, sin exceder diez (10) pagos de matrícula ordinaria."],
            ["Trámite de pago", "La compañía gira directamente a la Institución Nacional de Educación Superior autorizada el valor de la matrícula ordinaria."],
            ["Beneficio adicional Seguro de Vida", "Incluye cobertura por muerte o incapacidad total y permanente."],
            ["Suma asegurada", "Renta mensual por 2 SMMLV por 12 meses. Máximo cubre 15 años de escolaridad."],
            ["Edad máxima de ingreso", "Hasta 55 años."]
        ],
        links: [
    ["Ver anexo", "PDFs/GlobalUniversidad-Garantizada-Platino-.pdf"],
    ["Ver clausulado", "PDFs/POLIZA-SEGURO-EDUCATIVO-GlobalUniversidad-Garantizada-Platino-2025.pdf"],
    ["Ver tarifas", "PDFs/TARIFAS-GUG-GUGP-GUS-II-TRIMESTRE-2026.pdf"]
    ]
    },

    garantizada: {
        titulo: "GlobalUniversidad Garantizada",
        intro: "Producto educativo que respalda el pago del 100% de la matrícula ordinaria para pregrado en Colombia.",
        bloques: [
            ["Cobertura educativa", "Garantiza el 100% del pago del valor de la matrícula ordinaria."],
            ["Lugar de cobertura", "Aplica para cualquier carrera de pregrado en cualquier universidad en Colombia."],
            ["Periodos de cobertura", "Cubre hasta cinco (5) años de periodos académicos, sin exceder diez (10) pagos de matrícula ordinaria."],
            ["Trámite de pago", "La compañía gira directamente a la institución educativa el valor de la matrícula ordinaria."],
            ["Beneficio adicional Seguro de Vida", "Incluye cobertura por muerte o incapacidad total y permanente."],
            ["Suma asegurada", "Valor de la prima del seguro educativo."],
            ["Edad máxima de ingreso", "Hasta 65 años."]
        ],
        links: [
    ["Ver anexo", "PDFs/GlobalUniversidad-Garantizada-.pdf"],
    ["Ver clausulado", "PDFs/Poliza-Seguro-GlobalUniversidad-Garantizada-2025.pdf"],
    ["Ver tarifas", "PDFs/TARIFAS-GUG-GUGP-GUS-II-TRIMESTRE-2026.pdf"]
    ]
    },

    semestres: {
        titulo: "GlobalSemestres",
        intro: "Solución que permite asegurar el número de semestres adquiridos para educación superior.",
        bloques: [
            ["Cobertura educativa", "Garantiza el 100% del pago del valor de la matrícula ordinaria, de acuerdo con el número de semestres adquiridos."],
            ["Lugar de cobertura", "Aplica para cualquier carrera de pregrado en cualquier universidad en Colombia."],
            ["Periodos de cobertura", "La cobertura corresponde al número de semestres adquiridos."],
            ["Trámite de pago", "Global Seguros gira directamente a la institución educativa el valor de la matrícula ordinaria."],
            ["Beneficio adicional Seguro de Vida", "Incluye cobertura por muerte o incapacidad total y permanente."],
            ["Suma asegurada", "Valor de la prima educativa de Universidad Garantizada estipulada en la carátula de la póliza."],
            ["Edad máxima de ingreso", "Hasta 70 años."]
        ],
        links: [
    ["Ver anexo", "PDFs/GlobalSemestres-.pdf"],
    ["Ver clausulado", "PDFs/POLIZA-SEGURO-EDUCATIVO-GlobalSemestres-2025.pdf"],
    ["Ver tarifas", "PDFs/TARIFAS-GUG-GUGP-GUS-II-TRIMESTRE-2026.pdf"]
   ]
    },

    flex: {
        titulo: "GlobalEducación Flex",
        intro: "Solución flexible para construir el capital necesario y alcanzar objetivos educativos.",
        bloques: [
            ["Descripción del producto", "Permite construir el capital necesario para alcanzar los objetivos educativos deseados."],
            ["Flexibilidad del plan", "Se puede escoger la fecha de inicio, el valor, la periodicidad de pago y el tiempo para recibir el capital acumulado."],
            ["Beneficio adicional Seguro de Vida", "Incluye cobertura por muerte o incapacidad total y permanente."],
            ["Suma asegurada", "Busca asegurar el cumplimiento del objetivo educativo, cubriendo el valor faltante de la reserva constituida."],
            ["Periodos de cobertura", "Durante el tiempo de acumulación de capital."],
            ["Edad máxima de ingreso", "Hasta 65 años para muerte y 60 años para incapacidad total y permanente."]
        ],
       links: [
    ["Ver clausulado", "PDFs/Clausulado20Educacion20Flex202-2-comprimido-1.pdf"]
    ]
    },

    seguraPlus: {
        titulo: "GlobalUniversidad Segura Plus",
        intro: "Garantiza el pago directo a la institución de educación superior en Colombia elegida por el beneficiario.",
        bloques: [
            ["Cobertura educativa", "Cubre el costo del valor asegurado por medio de una prima única financiada."],
            ["Periodos de cobertura", "Cubre cuatro (4) años u ocho (8) periodos académicos semestrales adquiridos."],
            ["Ajuste", "Ajuste anual por variación del IPC del año inmediatamente anterior."],
            ["Trámite de pago", "El pago se realiza directamente a la institución de educación superior seleccionada."],
            ["Beneficio adicional Seguro de Vida", "Incluye cobertura por muerte o incapacidad total y permanente."],
            ["Suma asegurada", "Valor total de la prima del seguro."],
            ["Edad máxima de ingreso", "Máximo 65 años para muerte y máximo 60 años para ITP."]
        ],
       links: [
    ["Ver clausulado", "PDFs/GS-Poliza-Universidad-Segura-Plus-1.pdf"]
    ]
    },

    seguraPlusSemestres: {
        titulo: "GlobalUniversidad Segura Plus Semestres",
        intro: "Solución flexible que permite asegurar desde uno hasta ocho semestres académicos.",
        bloques: [
            ["Cobertura educativa", "Garantiza el pago directo del valor de la matrícula a la institución educativa en Colombia elegida por el beneficiario."],
            ["Periodos de cobertura", "Cubre los periodos académicos semestrales adquiridos hasta máximo ocho (8)."],
            ["Ajuste", "Ajuste anual por variación del IPC del año inmediatamente anterior."],
            ["Beneficio adicional Seguro de Vida", "Incluye cobertura por muerte o incapacidad total y permanente."],
            ["Suma asegurada", "Ocho (8) veces el valor asegurado de la cobertura básica vigente al inicio de cada aniversario."],
            ["Edad máxima de ingreso", "Máximo 70 años para muerte y máximo 65 años para ITP."]
        ],
       links: [
    ["Ver clausulado", "PDFs/GS-Poliza-Segura-Plus-Semestres-1.pdf"]
    ]
    },

    masProfesional: {
        titulo: "GlobalMás Profesional",
        intro: "Solución que permite pagar la prima en varios años de acuerdo con la capacidad financiera del tomador.",
        bloques: [
            ["Cobertura educativa", "Garantiza el pago del valor de la matrícula en Colombia a la institución seleccionada."],
            ["Periodos de cobertura", "Cubre cuatro (4) años u ocho (8) periodos académicos semestrales adquiridos."],
            ["Ajuste", "Ajuste anual por variación del IPC del año inmediatamente anterior."],
            ["Beneficio adicional Seguro de Vida", "Incluye cobertura por muerte o incapacidad total y permanente."],
            ["Suma asegurada", "Ocho (8) veces el valor asegurado de la cobertura básica vigente al inicio de cada aniversario."],
            ["Periodo de cobertura", "Un (1) año renovable mientras exista pago de primas."],
            ["Edad máxima de ingreso", "Máximo 70 años para muerte y máximo 65 años para ITP."]
        ],
        links: [
    ["Ver clausulado", "PDFs/GS-Poliza-Mas-Profesional-2.pdf"]
    ]
    },

    posgrado: {
        titulo: "GlobalUniversidad Posgrado",
        intro: "Garantiza el pago directo a la institución de educación superior en Colombia elegida por el beneficiario.",
        bloques: [
            ["Cobertura educativa", "Paga directamente la matrícula ordinaria del programa de posgrado."],
            ["Alcance de cobertura", "Cubre hasta dos (2) periodos académicos semestrales o su equivalente."],
            ["Tiempo para finalizar", "El beneficiario tendrá hasta tres (3) años para finalizar los periodos académicos restantes."],
            ["Condición de maduración", "El tiempo entre la suscripción y el año de maduración no podrá ser inferior a seis (6) años."],
            ["Beneficio adicional Seguro de Vida", "Incluye cobertura por muerte o incapacidad total y permanente."],
            ["Edad máxima de ingreso", "Máximo 65 años para muerte y máximo 60 años para ITP."]
        ],
        links: [
    ["Ver clausulado", "PDFs/Póliza-GlobalUniversidad-Posgrado.pdf"],
    ["Ver tarifas", "PDFs/GS-Tarifas-Posgrados-1.pdf"]
    ]
    },

    posgradoPlus: {
        titulo: "GlobalUniversidad Posgrado Plus",
        intro: "Amplía la cobertura educativa para programas de posgrado en Colombia.",
        bloques: [
            ["Cobertura educativa", "Garantiza el pago directo de matrícula ordinaria en una institución de educación superior en Colombia."],
            ["Alcance de cobertura", "Cubre hasta cuatro (4) periodos académicos semestrales o su equivalente."],
            ["Tiempo para finalizar", "El beneficiario tendrá hasta cinco (5) años para finalizar los periodos académicos restantes."],
            ["Condición de maduración", "El tiempo entre la suscripción y el año de maduración no podrá ser inferior a seis (6) años."],
            ["Beneficio adicional Seguro de Vida", "Incluye cobertura por muerte o incapacidad total y permanente."],
            ["Edad máxima de ingreso", "Máximo 65 años para muerte y máximo 60 años para ITP."]
        ],
       links: [
    ["Ver clausulado", "PDFs/Póliza-GlobalUniversidad-Posgrado-Plus.pdf"],
    ["Ver tarifas", "PDFs/GS-Tarifas-Posgrados-1.pdf"]
    ]
    }
};

const tarjetasSeguro = document.querySelectorAll(".abrir-seguro");
const modalSeguro = document.querySelector("#modalSeguro");
const cerrarSeguro = document.querySelector(".cerrar-seguro");
const modalTitulo = document.querySelector("#modalTitulo");
const modalIntro = document.querySelector("#modalIntro");
const modalContenido = document.querySelector("#modalContenido");
const modalLinks = document.querySelector("#modalLinks");

tarjetasSeguro.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
        const seguroId = tarjeta.dataset.seguro;
        const seguro = seguros[seguroId];

        if (!seguro) return;

        modalTitulo.textContent = seguro.titulo;
        modalIntro.textContent = seguro.intro;

        modalContenido.innerHTML = seguro.bloques.map((bloque) => {
            return `
                <div class="modal-bloque">
                    <h4>${bloque[0]}</h4>
                    <p>${bloque[1]}</p>
                </div>
            `;
        }).join("");

        modalLinks.innerHTML = seguro.links.map((link) => {
            return `<a href="${link[1]}" target="_blank">${link[0]}</a>`;
        }).join("");

        modalSeguro.classList.add("activo");
        document.body.classList.add("modal-seguro-abierto");
    });
});

if (cerrarSeguro) {
    cerrarSeguro.addEventListener("click", () => {
        modalSeguro.classList.remove("activo");
        document.body.classList.remove("modal-seguro-abierto");
    });
}

if (modalSeguro) {
    modalSeguro.addEventListener("click", (event) => {
        if (event.target === modalSeguro) {
            modalSeguro.classList.remove("activo");
            document.body.classList.remove("modal-seguro-abierto");
        }
    });
}