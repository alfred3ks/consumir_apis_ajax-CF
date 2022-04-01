/*
Vamos a hacer nuestra primera peticion AJAX, usaremos la API Fetch:

https://developer.mozilla.org/es/docs/Web/API/Fetch_API

Leer que es importante. Podeos hacer consultas asincronas desde cleinte al servidor y esta dispnible para casi todos los navegadores exceptuando internet explorer.

Para este ejemplo usaremos esta API para las pruebas:

https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/posts

*/

// Tenemos nuestro JSON
let postParams = {
    title: 'foo',
    body: 'bar',
    userId: 1
}

let url = ('https://jsonplaceholder.typicode.com/posts');

fetch(url ,{
    method:'POST',
    body:JSON.stringify(postParams),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('ERROR:' + err))

/*
En el ejemplo anterior ya hemos visto como enviar JSON por medio de una peticion POST.

Tenemos el JSON:
let postParams = {
    title: 'foo',
    body: 'bar',
    userId: 1
}

Y dentro de la peticion lo convertimos en un string con el metodo stringify y lo enviamos como parte de la propiedad body de la configuracion del metodo fetch.

En algunos escenarios el servidor, el backend va a requerir que nosotros le especifiquemos a traves del encabezado de la solicitud en que formato vienen estructurados los parametros para que el sepa como los debe de leer.

Por ejemplo si enviamos un formulario, este por defecto no envia un JSON, envia los parametros estructurados de una manera distinta a JSON.

Es buena practica especificar el tipo de contenido enviando.

headers:{
    "Content-type": "application/json; charset=UTF-8"
}

A traves de la propiedad headers del objeto de configuracion de fetch, nosotros podemos decirle encabezados adicionales.

En el apartado de network vemos en la seccion de encabezados de solicitud esos datos.

*/