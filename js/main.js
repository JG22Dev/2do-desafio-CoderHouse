//SIMULADOR DE CALIFICACIONES

//funcion saludar
/*
function saludar(nombre, apellido, mensaje, mensaje2){
    var mensaje = alert("Hola Bienvenido Profesor");
    var nombre = prompt("Profesor indique su nombre");
    var apellido = prompt("Profesor indique su apellido");
    var mensaje2 = alert("Bienvenido al sistema de notas profesor"+" "+ nombre+ " "+ apellido);
} 


saludar()
*/

let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');

let fecha = new Date();
let diaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
let mesAnio = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnio[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(()=>{
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString();
},1000);




//array global
baseDeEstudiantes = [];



//Capturar a traves de una funcion constructora
function capturar() {
    class Estudiante {
        constructor(nombre, nota){
            this.nombre = nombre 
            this.nota = parseFloat(nota); 
        }
    }
    estudianteCapturado = document.getElementById("nombre").value;
    notaCapturada = document.getElementById("nota").value;

    nuevoEstudiante = new Estudiante(estudianteCapturado, notaCapturada);
    console.log(nuevoEstudiante);
    agregar();

}

//Funcion agregar elementos al array
function agregar(){
    baseDeEstudiantes.push(nuevoEstudiante);
    localStorage.getItem = estudianteCapturado;
    localStorage.getItem = notaCapturada
    console.log(baseDeEstudiantes);
    mostrar()
};
function mostrar() {
    let bases = JSON.parse(localStorage.bases)
    bases.innertHTML += '<' 
}

//Funcion sacar elementos al array
function sacar(){
    baseDeEstudiantes.pop(nuevoEstudiante)
    console.log(baseDeEstudiantes);
}

//funciones de busqueda
function buscarEstudiante() {
    let nombreBuscado =  prompt("¿Que estudiante desea encontrar?");
    const encontrado = baseDeEstudiantes.filter((el)=> {
        return el.nombre === nombreBuscado;
    });
    console.log(encontrado);
    
}

function buscarNota(){
    let notaEncontrada = parseFloat(prompt("¿Que nota desea encontrar?"));
    const encontrado1 = baseDeEstudiantes.filter((el) => {
        return el.nota === notaEncontrada;}
    );
    console.log(encontrado1);
}