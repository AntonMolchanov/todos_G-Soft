import types from "./types";

const todosReducers = (state = [], action) => {
    const {type,payload} = action;
    const {gotTodos,removedTodo,completedTodo,uncompletedTodo,addedTodo, editedTodo} = types;

    switch (type) {
        case gotTodos:
            return payload
        case removedTodo:
            return payload
        case completedTodo:
            return payload
        case uncompletedTodo:
            return payload
        case addedTodo:
            return payload
        case editedTodo:
            return payload
        default: return state
    }
}

export default {
    todos: todosReducers
}