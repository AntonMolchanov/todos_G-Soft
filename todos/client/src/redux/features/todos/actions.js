import types from "./types";

const getTodos = (data) => ({
    type: types.gotTodos,
    payload: data
})

const removeTodo = (updatedTodos) => ({
    type: types.removedTodo,
    payload: updatedTodos
})

const completeTodo = (updatedList) => ({
    type: types.completedTodo,
    payload: updatedList
})

const uncompleteTodo = (updatedList) => ({
    type: types.uncompletedTodo,
    payload: updatedList
})

const addedTodo = (updatedList) => ({
    type: types.addedTodo,
    payload: updatedList
})

const editedTodo = (updatedList) => ({
    type: types.editedTodo,
    payload: updatedList
})

const actions = {
    getTodos,
    removeTodo,
    completeTodo,
    uncompleteTodo,
    addedTodo,
    editedTodo
}

export default actions;