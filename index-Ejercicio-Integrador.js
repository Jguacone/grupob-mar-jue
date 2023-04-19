async function callBackClickPlaceHolder(){
    //llamamos a la función que invoca el servicio
    const lista = await findJSON();
    const html = TotalPorExtension(lista.data);

    //tomar el resultado y dibujar en el div la tabla
    inyectar('listaPlaceHolder', html);    

}

function inyectar(key, data){
    document.getElementById(key).innerHTML = data;
}

//Agrego evento click al boton
document
    .getElementById('btnPlaceHolder')
    .addEventListener('click',callBackClickPlaceHolder);