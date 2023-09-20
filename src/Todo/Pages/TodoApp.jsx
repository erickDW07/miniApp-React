import { useState } from "react"
import { ListItems } from "../Components/ListItems"
import { TodoForm } from "../Components/TodoForm";
import { useTodo } from "../Hooks/useTodo";

export const TodoApp = () => {

   const {todoList,handleAddTodo, handleCheckTodo, handleDeleteTodo} = useTodo();

   return (
      <div className="p-3">
         <h1>Todo List</h1>
         <div className="row">
            <div className="col-8">
               <ListItems items={todoList} onDeleteTodo={handleDeleteTodo} onCheckTodo={handleCheckTodo} />
            </div>
            <div className="col-4">
               <TodoForm onSubmitTodo={handleAddTodo} />
            </div>
         </div>
      </div>
   )
}
