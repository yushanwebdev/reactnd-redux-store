import API from 'goals-todos-api';

const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

function addGoalAction(goal) {
    return {
        type: ADD_GOAL,
        goal
    }
}

function removeGoalAction(id) {
    return {
        type: REMOVE_GOAL,
        id
    }
}

function handleAddGoal(name, cb) {
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoalAction(goal));
                cb();
            })
            .catch((goal) => {
                alert('An error occured, Try again.');
            })
    }
}

function handleDeleteGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoalAction(goal.id));

        return API.deleteGoal(goal.id)
            .catch(() => {
                dispatch(addGoalAction(goal));
                alert('An error occured, Try again.');
            });
    }
}