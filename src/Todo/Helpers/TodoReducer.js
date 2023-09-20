export const accionType = {
    addTodo: '[TODO] add',
    deleteTodo: '[TODO] delete',
    checkTodo: '[TODO] check'
}

export const TodoReducer = (initialState = [], accion) => {

    switch (accion.type) {
        case accionType.addTodo:
            return [...initialState, accion.payload]

        case accionType.deleteTodo:
            const newTodosDelete = initialState.filter((todo) => {
                if (todo.id !== accion.payload) {
                    return todo;
                }
            });
            return newTodosDelete

        case accionType.checkTodo:
            const newTodosCheck = initialState.map((todo) => {
                if (todo.id === accion.payload) {
                    return { ...todo, done: !todo.done }
                }
                return todo
            });
            return newTodosCheck

        default:
            break;
    }


}