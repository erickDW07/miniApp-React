import { addTodo, checkTodo, deleteTodo } from "./"

// estos metodos estan penasado en caso de que haya una BD y se tenga que hacer procesos async
const addNewTodo = (todo) =>{
    return async (dispatch) =>{       

        const data = JSON.parse(localStorage.getItem('TodoList'));

        const newList = [...data, todo]

        console.log(newList);

        localStorage.setItem('TodoList', JSON.stringify(newList));

        dispatch(addTodo(todo));
    }
}

const removeTodo = (id)=> {
    return async (dispatch)=>{
        const data = JSON.parse(localStorage.getItem('TodoList'));

        const newList = data.filter((todo)=>{
            if (todo.id !== id)
                return todo
        });

        localStorage.setItem('TodoList', JSON.stringify(newList));

        dispatch(deleteTodo(id));
    }
}

const updateTodo = (id) =>{
    return async (dispatch) =>{
        const data = JSON.parse(localStorage.getItem('TodoList'));

        const newList = data.map((todo)=>{
            if (todo.id === id)
                return {...todo, done: !todo.done};
            return todo
        });

        localStorage.setItem('TodoList', JSON.stringify(newList));

        dispatch(checkTodo(id));
    }
}

export{
    addNewTodo,
    removeTodo,
    updateTodo
}