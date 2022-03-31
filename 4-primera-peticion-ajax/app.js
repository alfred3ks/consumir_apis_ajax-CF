/*

Vamos a hacer nuestra primera peticion AJAX, usaremos la API Fetch:

https://developer.mozilla.org/es/docs/Web/API/Fetch_API

Leer que es importante. Podeos hacer consultas asincronas desde cleinte al servidor y esta dispnible para casi todos los navegadores exceptuando internet explorer.

Para este ejemplo usaremos esta API para las pruebas:

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/posts


*/

const url = 'https://jsonplaceholder.typicode.com/posts';
console.log(fetch(url));

/*
console.log(fetch(url));
Al imprimir por consola nos dice que nos devuelve:

    Promise {<pending>}

Nos retorna una promesa, un valor que se resolvera en el futuro, a traves del metodo .then() debemos registrar una funcion que se va a ejecutar cuando el valor de la promesa se haya sido resuelta. El resultado de la promesa se recibe como parametro de la funcion que vamos a ejecutar. La promesa que retorna fetch resuelve en un objeto de tipo response, lo vemos cuando hacemos la peticion por la consola:

fetch(url).then((response)=>{
    console.log(response);  -> Response {}
})

Los datos que necesitamos estan ahi dentro de ese objeto Response {}. Para este caso los datos vienen en formato JSON.

Necesitamos hacer el proceso del parseo del JSON. Pasar del valor del objeto a JSON.

fetch(url).then((response)=>{
    response.json() -> uint8Array
})

Para este caso response genera la respuesta en una estructura que se llama uint8Array, no es texto como tal, el metodo response tiene metodos para interpretar esta estructura en cadenas. Esta operacion de interpretar o pasar de la estructura uint8Array a un JSON tambien es asincrona, osea tambien retorna una promesa, la cual la vamos a resolver con el metodo .then() al cual le pasaremos la funcion que ejecuara cuando se resuelva la promesa.

fetch(url).then((response)=>{
    response.json().then((data)=>{
        console.log(data);
    })
})

Ahora ya podemos ver todos los datos que nos devuelve el servidor con la peticion AJAX que hemos realizado.


*/
// Tres formas de hacer la peticion:

fetch(url)
    .then(
        (response)=>{response.json()
    .then((data)=>{
            // console.log(data);
        })
})

fetch(url)
    .then(
        (response)=>{return response.json()}
    ).then(
        // (data)=>{console.log(data);}
    )

fetch(url)
    .then(
        (response)=>response.json()
    ).then(
        (data)=>console.log(data)
    )

/*
Ahora si la respuesta no viene en JSON el objeto response tambien tiene un metodo .text(), lo que hara es parsear la informacion hacia texto plano.
*/

fetch(url)
    .then(
        (response) => response.text()
    ).then(
        (data) => console.log(data)
    )
