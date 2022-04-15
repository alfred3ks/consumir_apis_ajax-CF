// Peticiones AJAX
/*
action { type: , payload:}
*/

export default (action)=>{
    let options = {
        method: getMethod(action)
    }

    return fetch(endpoint + getPath(action), options)
            .then(response => response.json())
}

const path = 'todos';
const endpoint = 'https://jsonplaceholder.typicode.com';

// Diferentes acciones a realizar en el CRUD
let getMethod = (action) => {
    switch(action.type){
        case 'create':
            return 'POST'
        case 'update':
            return 'PUT'
        case 'destroid':
            return 'DELETE'
        case 'list':
            return 'GET'
        case 'listAll':
            return 'GET'
    }
}

let getPath = (action) => {
    switch(action.type){
        case 'create':
            return `/${path}`
        case 'update':
            return `/${path}/${action.payload.id}`
        case 'destroid':
            return `/${path}/${action.payload.id}`
        case 'list':
            return `/${path}/${action.payload.id}`
        case 'listAll':
            return `/${path}`
    }
}
