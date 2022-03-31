/*

Vamos a hacer nuestra primera peticion AJAX, usaremos la API Fetch:

https://developer.mozilla.org/es/docs/Web/API/Fetch_API

Leer que es importante. Podeos hacer consultas asincronas desde cleinte al servidor y esta dispnible para casi todos los navegadores exceptuando internet explorer.

Para este ejemplo usaremos esta API para las pruebas:

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/posts


*/
const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url).then((response)=>{
//     response.json().then((datos)=>{
//        console.log(datos);
//     })
// })

/*

Vamos a ver como manejar lo resultados y los posibles errores. Puede darse el caso que no podamos recibir inforamcion desde el servidor bien sea porque esta mal la url,o multiples factores, esos errores los debemos manejar. Para capturar los errores debemos usar el metodo catch() de una promesa.

*/

fetch(url).then((response)=>{
    console.log(response.status);
    response.json().then((data)=>{
        console.log(data);
    })
}).catch((err)=>{
    console.log('Error:'+ err);
})

/*

Una cosa interesante que debemos ver que el objeto response nos devuelve por el metodo status el estado de la web.

Las respuestas de status code de HTTP:
Todos los codigos entre 200 a 299 todo OK.
Todos los codigos del rango de 300 a 399 significan un redireccionamiento.
Todos los codigos del rango de 400 a 499 significan un recurso no encontrado.
Todos los codigos del rango de 500 a 599 significn un error

https://www.dotcom-monitor.com/wiki/es/knowledge-base/http-status-codes/

*/


