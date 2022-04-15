// Control del DOM
import { Todo } from './Todo.js';

window.addEventListener('load', (e)=>{
    Todo.all().then(todos => console.log(todos))
})


