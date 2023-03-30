//inicio de la carga de nuestros componentes
function render(){
    //poder invocar al componente ListadoUsuarios
    //const html = ListadoUsuarios({});//le paso parametro vacío

    //tomar el resultado y dibujar en el div la tabla
    //inyectar('userList', html)    


}



async function callBackClick(){
    //llamamos a la función que invoca el servicio
    const listado = await findUsers(1);
    const html = ListadoUsuarios(listado.data);

    //tomar el resultado y dibujar en el div la tabla
    inyectar('userList', html)    

}

function inyectar(key, data){
    document.getElementById(key).innerHTML = data;
}

//Agrego evento click al boton
document
    .getElementById('btnFindUser')
    .addEventListener('click',callBackClick);

//ejecutamos el render
render();