import { useEffect, useReducer } from "react";
import { TodoReducer, accionType } from "../Helpers/TodoReducer";

const init = ()=>{
    return JSON.parse(localStorage.getItem('TodoList'))||[];
}


export const useTodo = ()=>{
    const [todoList, dispatch] = useReducer(TodoReducer,[], init);

    useEffect(()=>{
        localStorage.setItem('TodoList', JSON.stringify(todoList));
    }, [todoList]);

    const handleAddTodo = (todo)=>{
        const accion = {
            type: accionType.addTodo,
            payload: todo
        }
        dispatch(accion)
    }
    
    const handleDeleteTodo = (id)=>{
        const accion = {
            type: accionType.deleteTodo,
            payload: id
        }
        dispatch(accion);
    }

    const handleCheckTodo = (id)=>{
        const accion = {
            type: accionType.checkTodo,
            payload: id
        }
        console.log('checked', id);
        dispatch(accion);
    }

    return {
        todoList,
        handleAddTodo,
        handleCheckTodo,
        handleDeleteTodo
    }
}