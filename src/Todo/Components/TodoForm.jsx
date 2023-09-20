import { useDispatch } from "react-redux";
import { addNewTodo } from "../../Store/todo";
import { useForm } from "../../hooks/useForm"

export const TodoForm = ({onSubmitTodo}) => {
    const dispatch = useDispatch()
    const {todo, onInputChange, onResetForm} = useForm({
        todo: ''
    })

    const submitTodo = (event)=>{
        event.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            todo,
            done: false
        }
        //Using a custom reducer
        //onSubmitTodo(newTodo);

        //Using redux
        dispatch(addNewTodo(newTodo));

        onResetForm();
    }

   return (
      <form onSubmit={submitTodo}>
        <input type="text" className="form-control" value={todo} name='todo' onChange={onInputChange} placeholder="New Todo" />
        <button type="submit" className="btn btn-success mt-2">Add</button>
      </form>
   )
}