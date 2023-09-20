import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: JSON.parse(localStorage.getItem('TodoList')) || []
    },
    reducers: {
        addTodo: (state, action) =>{
            state.todoList = [...state.todoList, action.payload]
        },
        deleteTodo: (state, action) =>{
            state.todoList = state.todoList.filter((todo)=>{
                if (todo.id !== action.payload )
                return todo;
            });
        },
        checkTodo: (state,action) =>{
            state.todoList = state.todoList.map((todo)=>{
                if (todo.id === action.payload){
                    return {...todo, done: !todo.done}
                }
                return todo;
            })
        }

    }

})

export const {addTodo, deleteTodo, checkTodo} = todoSlice.actions; 