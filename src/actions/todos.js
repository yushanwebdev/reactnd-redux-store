import API from 'goals-todos-api';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggleTodoAction(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

function handleAddTodo(name, cb) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodoAction(todo));
                cb();
            })
            .catch((todo) => {
                alert('An error occured, Try again.');
            });
    }
}

function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodoAction(todo.id));

        return API.deleteTodo(todo.id)
            .catch(() => {
                dispatch(addTodoAction(todo));
                alert('An error occured, Try again.');
            });
    }
}

function handleToggleTodo(todo) {
    return (dispatch) => {
        dispatch(toggleTodoAction(todo.id))

        return API.saveTodoToggle(todo.id)
            .catch(() => {
                dispatch(toggleTodoAction(todo.id));
                alert('An error occured, Try again.');
            });
    }
}