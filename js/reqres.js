//SERVICIOS PARA CONSUMO DE RECUROS "USER"

const urlBase = 'https://reqres.in/api';

//si la función va a llamar a una función asincrónica tenemos que definir la función como "async"
async function get(id) {
    const urlEndPoint = `${urlBase}/users/${id}`;
    
    //el fetch viene de fábrica y está dentro de las funciones nativas de javascript
    //se utiliza como puente para consumir una api externa
    //es una función asincronia, por eso tenemos que poner la palabra "await" delante de fetch
    const response = await fetch(urlEndPoint);
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    UserCard(jsonResponse);
}

//se define una constante como función de flecha
//muestra en una tarjeta los datos del json devuelto por el servicio
const UserCard = (user) => {
const html= `
<label>${user.data.first_name}</label>
<label>${user.data.last_name}</label>
`
document.getElementById('users').innerHTML = html
}

function findUserCallBack() {
      get(2);
  }


//agregar evento a un boton
const btn = document.getElementById('btnFindUser');
btn.addEventListener('click', findUserCallBack);

