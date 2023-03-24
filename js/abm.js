//scope: donde se puede ver el elemento. el objeto personas puede verse desde la fila 1 en adelante, incluso dentro de las funciones
//let personas = [];

//cargo array con lo guardado el el localsotrage con key 'personas' o si no hay nada con el objeto vacío []
//para eso uso el objeto JSON y su metodo parse y luego el objeto localStorage y su método getItem
//let personas = JSON.parse(localStorage.getItem('personas')) || []

//hago lo mismo pero llamando a una función que hace el get item
let personas = JSON.parse(obtenerDeLocalStorage('personas')) || []

//Adiciono en un array los inputs ingresados por pantalla unificados en un objeto
function agregar() {
    //document: viene de fábrica y básicamente me permite llegar al HTML desde Javascript
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    
    //creo objeto con campos nombre y apellido.
    //además agrego un id aleatorio para poder identificar una fila dentro de la lista
    const obj = {
        id: Math.random(),
        nombre: nombre.value,
        apellido: apellido.value
    };

    //valido que exista....

    //agregar dentro de un array
    personas.push(obj);

    //console.log(personas);
    //mostrar();
    TablaPersonas(personas);

    //Limpio campos de ingreso de datos
    nombre.value = ' ';
    apellido.value = ' ';

    //Dejo foco en el primer campo
    nombre.focus();

    //guardar en el localStorage
    guardarEnLocalStorage('personas', personas);
    
}

//Tomo los elementos del array y los agrego en un div
function mostrar() {
    const div = getDivPersonas(); //Parent
    
    //Limpio el div
    div.innerHTML = '';

    //div.innerHTML = JSON.stringify(personas);
    
    //uso map para concatenar nombre y apellido y que el array sea de strings y no de objetos
    //const nombresPostMap = personas.map(x => x.nombre + ' ' + x.apellido);
   

    //for of
    for(let item of personas) {
        //crear el elemento 
        const p_nuevo = document.createElement('p');
        p_nuevo.textContent = `${item.nombre} ${item.apellido}`;
        
        //agregar al nodo padre
        div.appendChild(p_nuevo);
    }
    //personas.forEach(x => div.innerHTML +=  x.nombre + ' ' + x.apellido + '<br>');
};

function TablaPersonas(personas) {
    //defino con let porque voy a ir reasignando con +=
    //creo tabla HTML dinamicamente
    let tablaPersona = 
    `<table border=1 width="100%">
        <tr>
            <th>Nombre</th> 
            <th>Apellido</th>
            <th>&nbsp</th>
        </tr>`;

    //recorro array y voy concatenando un string que devuelve la función FilaPersona
    personas.forEach(persona => {
        tablaPersona += FilaPersona(persona);
    }); 
    
    //concateno cierre de tabla HTML
    tablaPersona += '</table>';
   
//alert(tablaPersona);

//defino variable para recibir lo que tiene el Div
const divPersonas=getDivPersonas();

//asigno HTML dinámico al DIV

divPersonas.innerHTML = tablaPersona;

};

function FilaPersona (persona) {
    //armo una string que contiene html de la fila de una tabla con valores dinámicos de personas
    //incluso agrego creo un buttom para ejecutar una accion
    //agrego un id a cada fila con el atributo id del objeto persona recibido
    const fila = 
    `<tr id=${persona.id}>
        <td>
            ${persona.nombre}
        </td>
        <td>
            ${persona.apellido}
        </td>
        <td>
            <button onclick="eliminarPorNodo(${persona.id})">Eliminar</button> 
            <button onclick="editar(${persona.id})">Editar</button> 
        </td>
    </tr>`
    
    //primeramente lo hicimos funcionar con la función eliminar que quitaba el elemeto con el filter sobre el array
    //<button onclick="eliminar(${persona.id})">Eliminar</button> 
       
    return fila;
};

/*
function eliminar(id){

    //alert(`${id}`);
    //regenera el array quitando el elemento con id igual al recibido como parametro
    personas = personas.filter(p=> p.id !== id);



    //limpio el div
    limpiarDiv();

    //llamo a funcion para rearmar tabla sin el elemento eliminado
    TablaPersonas(personas);
};
*/

function getDivPersonas() {
    return document.getElementById('alumnos');    
};

function limpiarDiv() {
    const div = getDivPersonas();
    div.innerHTML = ' ';
}


//funcion para eliminar un nodo sin recargar toda la tabla
function eliminarPorNodo(id){
    if(!confirm('desea eliminar a la persona?')){
        return;
    }
    //obtengo el nodo child correspondiente al id
    const child = document.getElementById(id);
    //con parentNode obtengo el padre del nodo que tiene el id que se pasa por parámetro
    const parentNode = child.parentNode;
    //con el metodo removeChild del padre puedo eliminar del HTML el nodo cuyo id es el pasado como parámetro
    parentNode.removeChild(child);
    
    //elimino el objeto del array    
     personas = personas.filter(p=> p.id !== id);

     //actualiza en el localStorage
     guardarEnLocalStorage('personas', personas);

};

function obtenerDeLocalStorage(key) {
    return localStorage.getItem(key);
}

function guardarEnLocalStorage(key, valor) {
    localStorage.setItem(key, JSON.stringify(valor));
}

function editar(id) {
    //debugger;

    //con el metodo find obtengo un elemento del array
    const objPersona = personas.find(p => p.id === id);

    //recupero inputs del HTML con getElemntById
    //con value asigno valores a los inputs con los valores de los atributos del objeto encontrado
    const nombreEditar = document.getElementById('personaNombre');
    nombreEditar.value = objPersona.nombre;
    const apellidoEditar = document.getElementById('personaApellido');
    apellidoEditar.value = objPersona.apellido;

    document.getElementById('idAActualizar').value=id;
} 


function actualizar() {

    debugger;
    //Obtengo el valor del id correspondiente al hidden idAActualizar
    const id = document.getElementById('idAActualizar').value;

    //obtengo la persona desde el arreglo para actualizar los datos en el objeto
    //const objPersona = personas.find(p => p.id === id);

    //Si existe la persona asigno los valores cargados en los inputs de edición a los atributos del objeto persona
    //if (!persona) {
    //    return
    //};

    //objPersona.nombre = document.getElementById('personaNombre').value;
    //objPersona.apellido = document.getElementById('personaApellido').value;
    
    //Lo que comenté anteriormente es porque hice obtuve el objeto de un array con el metodo find, esto hace que se me de una copia del objeto y no una referencia y 
    //más que cambie los valores no se actualizan en el origen porque lo que tengo es una copia

    //obtengo el indice de la persona desde el arreglo para actualizar los datos en el objeto
    const idxPersona = personas.findIndex(p => p.id === id);

    //si no encontró el indice me voy de la funcion
    if (idxPersona < 0) {
        return;
    }

    //Hago una búsqueda indexada del objeto (obtengo por referencia) y asigno nuevos valores
    const persona=personas[idxPersona];
    persona.nombre = document.getElementById('personaNombre').value;
    persona.apellido = document.getElementById('personaApellido').value;

    //Como hice una búsqueda indexada puedo actualizar el objeto del arreglo
    personas[idxPersona] = persona;
    
    guardarEnLocalStorage('personas',personas);
   
    //actualizo fila de la tabla sin necesidad de recargar toda la tabla
    actualizarFila(persona);

}

function actualizarFila(persona) {
    //el id del tr coincide con el id de la persona
    const tr = document.getElementById('id');
    tr.children[0].innerHTML = persona.nombre;
    tr.children[1].innerHTML = persona.apellido;

    limpiarCamposActualizar();

}

function limpiarCamposActualizar() {
    document.getElementById('personaNombre').value = ' ';
    document.getElementById('personaApellido').value = ' ';
    document.getElementById('idAActualizar').value = ' ';
    idAActualizar
}

//cuando se carga la página se llama a la función Tabla persona para que se dibuje la tabla y se carguen los datos obtenidos del 
//local cuando se define la variable arreglo personas

TablaPersonas(personas);