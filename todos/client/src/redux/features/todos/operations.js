import actions from "./actions";

const {
    getTodos,
    removeTodo,
    addedTodo,
    completeTodo,
    uncompleteTodo,
    editedTodo
} = actions;

const getData = () => (dispatch) => {
    const dataFromLS = JSON.parse(localStorage.getItem('todos'))
    if (!dataFromLS) {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos/?_limit=10')
            .then(res => res.json())
            .then(data => dispatch(getTodos(data)))
            .then(data => localStorage.setItem('todos', JSON.stringify(data.payload))
            )
    } else {
        dispatch(getTodos(dataFromLS))
    }
}

const removeTodoItem = (idToRemove) => (dispatch, getState) => {
    const todos = getState().todos
    const updatedList = todos.filter(item => item.id !== idToRemove)
    localStorage.setItem('todos', JSON.stringify(updatedList))
    dispatch(removeTodo(updatedList))
}

const completeTodoItem = (id) => (dispatch, getState) => {
    const todos = getState().todos;
    const updatedTodoList = todos.map(item =>
        item.id === id
            ? {...item, completed: true}
            : item
    )
    localStorage.setItem('todos', JSON.stringify(updatedTodoList))
    dispatch(completeTodo(updatedTodoList))
}
const uncompleteTodoItem = (id) => (dispatch, getState) => {
    const todos = getState().todos;
    const updatedTodoList = todos.map(item =>
        item.id === id
            ? {...item, completed: false}
            : item
    )
    localStorage.setItem('todos', JSON.stringify(updatedTodoList))
    dispatch(uncompleteTodo(updatedTodoList))
}

const addTodo = (newTodo) => (dispatch,getState) => {
    const todos = getState().todos;
    const updatedTodoList = [...todos, newTodo]
    dispatch(addedTodo(updatedTodoList))
}

const editedTodoItem = (id,newTitle) => (dispatch, getState) => {
    const todos = getState().todos;
    const updatedTodoList = todos.map(item =>
        item.id === id
            ? {...item, title: newTitle}
            : item
    )
    localStorage.setItem('todos', JSON.stringify(updatedTodoList))
    dispatch(editedTodo(updatedTodoList))
}

const operations = {
    getData,
    removeTodoItem,
    completeTodo: completeTodoItem,
    uncompleteTodo: uncompleteTodoItem,
    addTodo,
    editedTodoItem
}

export default operations;