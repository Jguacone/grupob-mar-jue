//crear vector
//const alumnos=['jorge','carlos','maria','claudia'];
//console.log(alumnos);

//agregar item al final
//alumnos.push('andrea');
//console.log(alumnos);

//agregar item al inicio
//alumnos.unshift('pedro');
//console.log(alumnos);

//quitar el último
//alumnos.pop();
//console.log(alumnos);

//Quedarme con el elemento eliminado
//const eliminado=alumnos.pop();
//console.log(`se eliminó a ${eliminado}`);

//sacar al primero de la lista
//const eliminado2=alumnos.shift();
//console.log(`se eliminó a ${eliminado2}`);

//Estructura FOR
//const busqueda='maria'
//let idx=0
//for(let i=0;i<alumnos.length;i++){
//    if (alumnos [i]===busqueda) {
//        idx=i;
//        break;
//    }
//};
//console.log(`${busqueda} está en la posición ${idx}`);

//Metodos de Array

//IndexOF devuelve la primera posición en la que encuentra el elemento
//idx = alumnos.indexOf('maria');
//console.log(`${busqueda} está en la posición ${idx}`);

//LastIndexOF devuelve la ultima posición en la que encuentra el elemento
//idx = alumnos.lastIndexOf('maria');
//console.log(`${busqueda} está en la posición ${idx}`);

//Array de objetos
const personas = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
    {
        id: 3,
        name: 'c'
    }
];

// Arrow functions
// ArrayObj.Metodo(VarAux => QueQuiero)
// VarAux no se define, se crea magicamente para iterar los elementos del arreglo ArrayObj
const idxp = personas.findIndex(aux => aux.id===2);
console.log('Id 2 en posición', idxp);

