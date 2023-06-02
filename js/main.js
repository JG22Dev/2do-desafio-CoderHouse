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

// Array global
const baseDeEstudiantes = [];

function capturar() {
    const estudianteCapturado = document.getElementById("nombre").value;
    const notaCapturada = document.getElementById("nota").value;

    if (estudianteCapturado.trim() === '' || notaCapturada.trim() === '') {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const nuevaNota = parseFloat(notaCapturada);
    if (isNaN(nuevaNota) || nuevaNota < 0 || nuevaNota > 10) {
        alert("La nota debe ser un número válido entre 0 y 10.");
        return;
    }

    class Estudiante {
        constructor(nombre, nota) {
            this.nombre = nombre;
            this.nota = parseFloat(nota);
        }
    }

    const nuevoEstudiante = new Estudiante(estudianteCapturado, notaCapturada);
    baseDeEstudiantes.push(nuevoEstudiante);

    mostrarEstudiantes();
}

function mostrarEstudiantes() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    baseDeEstudiantes.forEach(estudiante => {
        const fila = document.createElement('tr');
        const nombreColumna = document.createElement('td');
        nombreColumna.textContent = estudiante.nombre;
        const notaColumna = document.createElement('td');
        notaColumna.textContent = estudiante.nota;

        fila.appendChild(nombreColumna);
        fila.appendChild(notaColumna);
        tbody.appendChild(fila);
    });
}

function sacar() {
    if (baseDeEstudiantes.length === 0) {
        alert("No hay estudiantes para eliminar.");
        return;
    }

    baseDeEstudiantes.pop();
    mostrarEstudiantes();
}

// Resto del código...
