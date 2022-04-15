// Clase que contiene los metodos y objetos de consulta
import performer from './request.js';

export class Todo {
    // Creamos el metodo de conexion
    static async all(){
        let todos = await performer({
            type:'listAll'
        });
        // console.log(todos);
        return todos.map(todoJSON => new Todo(todoJSON))
    }

    constructor(args){
        this.userId = args.userId;
        this.title = args.title;
        this.completed = args.completed;
        this.id = args.id;
    }
}