document.querySelector('#form').addEventListener('submit',(e)=>{
    // Asi le decimos al formulario que nosotros nos encargamos ahora con JS
    e.preventDefault();

    // Para enviar el archivo
    // Instanciamos un nuevo objeto d ela clase formdata
    let formData = new FormData();

    // Obtenemos el archivo
    let file = document.querySelector('#avatar').files[0];

    // Agregamos a formData el archivo
    formData.append("avatar", file)

    // Nos conectamos a la web
    const url = 'http://localhost:8080/files'
    fetch(url,{
        method:"post",
        body:formData
    })
    .then(resp=>resp.text()
    .then(data=> console.log('Enviado...'))
    .catch(err => console.log(`Error: ${err}`))
    )
    return false;
})