// import {} from redux
const redux = require('redux');
const creteStore = redux.createStore;

const initialState = {
    value: 0,
    age: 25
}

// Reducer
const rootReducer = (state = initialState, action) => {
    return state;
}

// Store
const store = creteStore(rootReducer);
console.log(store.getState())

// Despatching Action

// Subscription