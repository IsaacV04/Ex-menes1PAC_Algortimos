alert('Binvenido al Registro de alumnos\n\nPrecione aceptar.')

const listaAlumnos = {
    nombres: '',
    edades: '',
    calificaciones: '',
}

listaAlumnos.nombres = prompt('Ingrese el nombre del Alumno: ');
listaAlumnos.edades = prompt('Ingrese la edad del alumno: ');
listaAlumnos.calificaciones = parseFloat(prompt('Ingrese la calificacion del alumno: '));

console.log(`Lista de alumnos: \nNombre: ${listaAlumnos.nombres}, Edad: ${listaAlumnos.edades}, calificacion: ${listaAlumnos.calificaciones},`);

if(listaAlumnos.calificaciones >= 65) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}
