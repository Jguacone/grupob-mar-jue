// Console se utiliza para decirle al navegador que en la pestaña consola de Herramientas del desarrollador escriba algo
//console.log('Hola mundo');
//alert('Hola mundo');

// Definición de variables
//var: mala palabra, es global
//let: definición en un ámbito local
//cons: es una constante, el valor no cambia dentro del ambito
let a;
let b;
//debugger;
a=1;
b=3;
res=a+b;
console.log(res);
//me dice de que tipo es la variable
//typeof(a);
console.log('a es de tipo: ', typeof a);
// Tipos tradicionales
let nombre='carlos';
let edad=37;
let sexo='M';
let residente=true;
// Tipo objeto
let alumnos = {
    dni: 22156478,
    nomre: 'juan',
    edad: edad
};
// Mostrar valores de atributos del objeto alumno
console.log('alumno', alumnos);