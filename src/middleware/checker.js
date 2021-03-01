import { ADD_TODO } from '../actions/todos';
import { ADD_GOAL } from '../actions/goals';

const checker = (store) => (next) => (action) => {
    if (
        action.type === ADD_TODO &&
        action.todo.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope, That's a bad idea.");
    }

    if (
        action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope, That's a bad idea.");
    }

    return next(action); // next is going to be the next middleware in line if we have more than one middleware or it's  going to be dispatch.
}

export default checker;