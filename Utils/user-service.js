const urlBase = 'https://reqres.in/api';

//si la función va a llamar a una función asincrónica tenemos que definir la función como "async"
async function findUsers(page) {
    const urlEndPoint = `${urlBase}/users?page=${page}`;
    
    // Make a request for a user with a given ID
   /* 
    axios.get(`${urlEndPoint}`)
    .then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
    // always executed
    });
    */

    //el await no deja salir de la función hasta que la promesa del axios se cumpla
    return await axios.get(`${urlEndPoint}`);
}
