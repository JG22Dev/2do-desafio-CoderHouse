//SIMULADOR DE CALIFICACIONES

//funcion saludar

function saludar(nombre, apellido, mensaje, mensaje2){
    var mensaje = alert("Hola Bienvenido Profesor");
    var nombre = prompt("Profesor indique su nombre");
    var apellido = prompt("Profesor indique su apellido");
    var mensaje2 = alert("Bienvenido al sistema de notas profesor"+" "+ nombre+ " "+ apellido);
} 
saludar()


//Capturar a traves de una funcion constructora
function capturar() {
    function Estudiante(nombre, nota) {
        this.nombre = nombre 
        this.nota = parseFloat(nota);
    }

    estudianteCapturado = document.getElementById("nombre").value;
    notaCapturada = document.getElementById("nota").value;
    
    nuevoEstudiante = new Estudiante(estudianteCapturado, notaCapturada);
    console.log(nuevoEstudiante);
    agregar();

}
//array global
    baseDeEstudiantes = [];

//Funcion agregar elementos al array
function agregar(){
    baseDeEstudiantes.push(nuevoEstudiante)
    console.log(baseDeEstudiantes);

};

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