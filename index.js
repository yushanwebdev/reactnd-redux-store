function createStore() {
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state.
    // 4. Update the state.

    let state;
    let listeners = [];

    const getState = () => listeners;

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        }
    } // Here just return function with the equipment to remove the relevant listener. After execute this returned function the listener will remove from the listeners array.

    return {
        getState,
        subscribe
    }
}

const store = createStore();
store.subscribe(() => {
    console.log('The new state is: ', store.getState());
});
const unsubscribe = store.subscribe(() => {
    console.log('The store changed.');
});

unsubscribe();

// [Q1] How does the last listener get an unsubscribe name ? (Refer last-listener.png)