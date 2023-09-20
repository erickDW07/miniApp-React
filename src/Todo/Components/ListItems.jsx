import { useSelector } from "react-redux"
import { Item } from "./Item"

export const ListItems = ({ items = [], onDeleteTodo, onCheckTodo }) => {
    const { todoList } = useSelector(state => state.todo);

    return (
        
        <ul className="list-group">
            {
                // use a custom Reducer
                /*
                items.map(item => {
                    return <Item item={item} onCheckTodo={onCheckTodo} onDeleteTodo={onDeleteTodo} key={item.id}  />
                })
                */

                //use Redux
                todoList.map(todo => {
                    return <Item item={todo} key={todo.id} />
                })
            }
        </ul>
    )
}