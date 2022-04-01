/*
Vamos a hacer nuestra primera peticion AJAX, usaremos la API Fetch:

https://developer.mozilla.org/es/docs/Web/API/Fetch_API

Leer que es importante. Podeos hacer consultas asincronas desde cleinte al servidor y esta dispnible para casi todos los navegadores exceptuando internet explorer.

Para este ejemplo usaremos esta API para las pruebas:

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/posts

*/

/*

Para cambiar las peticiones de un metodo en fetch debemos de acceder a un segundo argumento al metodo fetch(url, {}), es un JSON con las configuracionque debera tener nuestra peticion:

Vemos en nuestro servidor que usamos el metodo post, es que queremos crear un nuevo recurso.

Segun nuestro servidor:

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

Con la respuesta:

{
    id: 101,
    title: 'foo',
    body: 'bar',
    userId: 1
}

Asi seria para crear un nuevo recurso en el servidor.
En el caso de POST rara vez los parametros de senvian como parametros de consulta, como lo hemos visto hasta ahora.

Normalmente los parametros que se envia, envian una peticion POST se envia en el cuerpo de la peticion:
Lo vemos:

    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    })

En el caso de una peticion GET, lo parametros siempre van como una peticion query como hemos visto, en el caso de de una peticion POST, PUT,PATCH DELETE los parametros viajan en el body de la peticion

Vemos a continuacioon el ejemplo de como hacer una peticion POST.

Vemos como el seevidor en la pestaña de network nos devuelve un codigo 201 y por consola un id:101 eso quiere decir que esta ok.

Otra particularidad que vemos del protocolo POST y si la url usa https, es que los datos que enviamos en el body van encriptados si algun atacante quiere interceptarlos verlos no le sera facil leerlos porque estan encriptados. Esto es importante sobre todo para el envia de contraseñas sobre todo cuando un usuario se va a autenticar en una web, o a enviar datos sensibles como datos de la tarjeta de credito, etc.

Los parametros de consulta -> osea los de las url nunca se encriptan por eso ahi nunca se deberian enviar datos sensibles.

*/

// Tenemos nuestro JSON
let postParams = {
    title: 'foo',
    body: 'bar',
    userId: 1
}

let url = ('https://jsonplaceholder.typicode.com/posts?');


fetch(url ,{
    method:'POST',
    body:JSON.stringify(postParams)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('ERROR:' + err))

