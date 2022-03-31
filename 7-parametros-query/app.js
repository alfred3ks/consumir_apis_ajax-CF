/*
Vamos a hacer nuestra primera peticion AJAX, usaremos la API Fetch:

https://developer.mozilla.org/es/docs/Web/API/Fetch_API

Leer que es importante. Podeos hacer consultas asincronas desde cleinte al servidor y esta dispnible para casi todos los navegadores exceptuando internet explorer.

Para este ejemplo usaremos esta API para las pruebas:

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/posts

*/
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('ERROR:' + err))

/*

Para ir configurando las peticiones que vamos a hacer hacia un servidor mediante AJAX una de las priemras formas que queramos hacerlas es enviando parametros query.
Los parametros query son aquellos que en una url se separan utilizando un simbolo de interrogacion:

    https://jsonplaceholder.typicode.com/posts?userId=1

Seria el parametros query + id + valor-> ?userId=1

Si tenemos mas de un parametro query lo podemos separar con un ampersan &

    https://jsonplaceholder.typicode.com/posts?userId=1&title=valor

Para nuestro caso nuestro servidor de pruebas acepta un parametro query:

    https://jsonplaceholder.typicode.com/posts?userId=1

Lo vemos en la documentacion de jsonplacehoder.

Lo vemos como nos devuelve solo los datos del userId=1

*/
const data = 'https://jsonplaceholder.typicode.com/posts?userId=1';
fetch(data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err=> console.log('ERROR:'+err))

/*
Esta es la primera forma de pasar parametros query, redactandolos en la url.

Si necesitas hacerlo de manera dinamica usaremos las comillas invertidas back tick: Esto se llama interpolacion.

*/
let pQuery = 'userId=2';
const urlData = `https://jsonplaceholder.typicode.com/posts?${pQuery}`;
fetch(urlData)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('ERROR:' + err))

/*
Otras veces estos parametros query estan en un hash o un json. Para pasar esos parametros a traves de una peticion ajax es la siguiente, nos vamos a referir al standar de fetch como se haria:

https://fetch.spec.whatwg.org/
https://fetch.spec.whatwg.org/#fetch-api

Lo que hacemos es pasar esos parametros que estan en el json a la url usando una peticion ajax.

*/
// Tenemos nuestro JSON:
let params = {
    userId: 2,
    _limit:3
}
let url1 = new URL('https://jsonplaceholder.typicode.com/posts?');

Object.keys(params).forEach((key)=>{
    console.log(key);
    url1.searchParams.append(key, params[key])
})

console.log(url1);
// href: "https://jsonplaceholder.typicode.com/posts?userId=2&_limit=3"

fetch(url1)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('ERROR:' + err))

// OJO ESTO ES MUY INTERESANTE!!!!!!