import { BiTrashAlt } from "react-icons/bi";
import { removeTodo, updateTodo } from "../../Store/todo";
import { useDispatch } from "react-redux";

export const Item = ({ item, onCheckTodo, onDeleteTodo }) => {
    const dispatch = useDispatch()
    const onDeleteTodoRedux = (id)=>{
        dispatch(removeTodo(id));
    }
    const onCheckTodoRedux = (id)=>{
        dispatch(updateTodo(id));
    }

    return (
        <li className="input-group mt-1">
            <div className="input-group-text">
                {/* Using a custom Reducer */}
                {/* <input type="checkbox" className="form-check-input m-0" checked={item.done} onChange={()=>onCheckTodo(item.id)} /> */}
                
                {/* Using Redux */}
                <input type="checkbox" className="form-check-input m-0" checked={item.done} onChange={()=>onCheckTodoRedux(item.id)} />
            </div>

            <label className="form-control">{item.todo}</label>
            {/* Using a custom Reducer */}
            {/* <button className="btn btn-danger btn-block" onClick={()=> onDeleteTodo(item.id)}>
                <BiTrashAlt />
            </button> */}

            {/* Using Redux */}
            <button className="btn btn-danger btn-block" onClick={()=> onDeleteTodoRedux(item.id)}>
                <BiTrashAlt />
            </button>
        </li>
    )
}