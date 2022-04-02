¿Que son las politicas cors?

Es un tema que compete a desarrolladores backend pero es necesario que el de frontend lo sepa.

CORS -> Cross-Origin Resource Sharing

Normativas que anuncian a una aplicacion de un origen distinto, usando HTTP headers de los recursos a los que tiene acceso.

¿que es un origen distinto?

Cuando dos aplicaciones se comunican decimos que estan en un origen distinto si:

- Un dominio distinto
- Un subdominio distinto
- Un puerto distinto
- Un protocolo distinto

Las peticiones de origen distinto se clasifican en dos grupos principalmente:

- Peticiones simples:
    - GET/HEAD/POST
    - Encabezados
    - Content-Type limitados

- Peticiones Preflight
    - No cumplen los requisitos de una peticion simple.

Que encabezados estan permitidos en una peticion simple:

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

Una cosa que podemos ver en la web que en la peticiones simples no estan JSON, si tu envias una peticion usando un formato JSON se convierte en una peticion preflight.

Que peticiones usan CORs:

- Peticiones AJAX
- Web Fonts
- Texturas WebGL
- Imagenes y videos usado en canvas
- CSS Shapes con imagenes.





