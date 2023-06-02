//SIMULADOR DE CALIFICACIONES

//función para mostrar la fecha y el reloj
let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');

let fecha = new Date();
let diaSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
let mesAnio = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnio[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(() => {
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString();
}, 1000);

//array global
let baseDeEstudiantes = [];

//Función para capturar los datos del estudiante
function capturar() {
    let nombreInput = document.getElementById("nombre").value;
    let notaInput = document.getElementById("nota").value;

    // Validar que los campos no estén vacíos
    if (nombreInput === "" || notaInput === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Validar que la nota sea un número del 0 al 10
    if (isNaN(notaInput) || notaInput < 0 || notaInput > 10) {
        alert("La nota debe ser un número del 0 al 10.");
        return;
    }

    let nuevoEstudiante = {
        nombre: nombreInput,
        nota: parseFloat(notaInput)
    };

    baseDeEstudiantes.push(nuevoEstudiante);
    mostrarTabla();
    resetForm();
}

//Función para mostrar la tabla con los estudiantes
function mostrarTabla() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    if (baseDeEstudiantes.length === 0) {
        return;
    }

    baseDeEstudiantes.forEach((estudiante) => {
        let fila = document.createElement("tr");
        let columnaNombre = document.createElement("td");
        let columnaNdo = document.createElement("td");

        columnaNombre.textContent = estudiante.nombre;
        columnaNdo.textContent = estudiante.nota;

        fila.appendChild(columnaNombre);
        fila.appendChild(columnaNdo);
        tbody.appendChild(fila);
    });
}

//Función para resetear el formulario
function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = "";
}

//Función para sacar el último estudiante de la lista
function sacar() {
    if (baseDeEstudiantes.length === 0) {
        alert("No hay estudiantes para eliminar.");
        return;
    }

    baseDeEstudiantes.pop();
    mostrarTabla();
}

//Función para buscar estudiantes por nombre
function buscarEstudiante() {
    if (baseDeEstudiantes.length === 0) {
        alert("No hay estudiantes para buscar.");
        return;
    }

    let nombreBuscado = prompt("Ingrese el nombre del estudiante a buscar:");
    let estudiantesEncontrados = baseDeEstudiantes.filter((estudiante) => {
        return estudiante.nombre.toLowerCase() === nombreBuscado.toLowerCase();
    });

    if (estudiantesEncontrados.length === 0) {
        alert("No se encontraron estudiantes con ese nombre.");
        return;
    }

    let resultados = estudiantesEncontrados.map((estudiante) => {
        return `${estudiante.nombre}: ${estudiante.nota}`;
    });

    alert(`Estudiantes encontrados:\n\n${resultados.join("\n")}`);
}

//Función para buscar estudiantes por nota
function buscarNota() {
    if (baseDeEstudiantes.length === 0) {
        alert("No hay estudiantes para buscar.");
        return;
    }

    let notaBuscada = parseFloat(prompt("Ingrese la nota a buscar:"));
    let estudiantesEncontrados = baseDeEstudiantes.filter((estudiante) => {
        return estudiante.nota === notaBuscada;
    });

    if (estudiantesEncontrados.length === 0) {
        alert("No se encontraron estudiantes con esa nota.");
        return;
    }

    let resultados = estudiantesEncontrados.map((estudiante) => {
        return `${estudiante.nombre}: ${estudiante.nota}`;
    });

    alert(`Estudiantes encontrados:\n\n${resultados.join("\n")}`);
}
