/*
Vamos a hacer nuestra primera peticion AJAX, usaremos la API Fetch:

https://developer.mozilla.org/es/docs/Web/API/Fetch_API

Leer que es importante. Podeos hacer consultas asincronas desde cleinte al servidor y esta dispnible para casi todos los navegadores exceptuando internet explorer.

Para este ejemplo usaremos esta API para las pruebas:

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/posts

*/

/*

Las peticiones que hemos estado realizando hasta ahora al servidor de tipo son de tipo GET, lo podemos ver en la cabecera del navegador en la apartado de network.

Para mas informacion podemos ver en la web de MDN.

Tambien llamados metodos http.

https://developer.mozilla.org/es/docs/Web/HTTP/Methods

Ademas de get existen otros:

        get -> consulta por la informacion,no modifica nada.Solo leer el recurso.
        head
        post -> creacion de datos
        put > actualizacion de datos
        patch -> actualizacion de datos
        delete -> borrado de datos
        connect
        option
        trace
        path

Cada uno de ellos especifica cual es la accion realizada desde el cliente al servidor. Es quien administra el servidor como va a influir en la peticion el metodo que hemos enviado.

El servidor lee la peticion y este define lo que deba hacer.

Para nuestro caso el ejemplo en la web de JSONPlaceholder vemos en el apartado de routes:

Routes
All HTTP methods are supported. You can use http or https for your requests.

GET                /posts
GET                /posts/1
GET                /posts/1/comments
GET                /comments?postId=1
POS                /posts
PUT                /posts/1
PATCH              /posts/1
DELETE             /posts/1

*/

// Tenemos nuestro JSON:
let params = {
    userId: 2,
    _limit:3
}
let url = new URL('https://jsonplaceholder.typicode.com/posts');

Object.keys(params).forEach((key)=>{
    console.log(key);
    url.searchParams.append(key, params[key])
})

console.log(url);
// href: "https://jsonplaceholder.typicode.com/posts?userId=2&_limit=3"

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('ERROR:' + err))

