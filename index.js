// Library Code
function createStore(reducer) {
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state.
    // 4. Update the state.

    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        }
    }

    const dispatch = (action) => {
        state = todos(state, action);
        listeners.forEach((listener) => listener());
    } 

    return {
        getState,
        subscribe,
        dispatch
    }
}

// App Code
function todos(state = [], action) {
    switch(action) {
        case 'ADD_TODO':
            return state.concat([action.todo]);
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map((todo) => todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete }));
        default:
            return state;
    }
}

function goals(state = [], action) {
    switch(action) {
        case 'ADD_GOAL':
            return state.concat([action.goal]);
        case 'REMOVE_GOAL':
            return state.filter((goal) => goal.id !== action.id);
        default:
            return state;
    }
}

function app(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action)
    }
}
 
const store = createStore(todos);

store.subscribe(() => {
    console.log('The new state is:', store.getState());
});

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
});

store.dispatch({
    type: 'ADD_GOAL',
    goal: {
        id: 1,
        name: 'Lose 20 pounds'
    }
});