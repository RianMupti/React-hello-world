// import {} from redux
const { act } = require('react-dom/test-utils');
const redux = require('redux');
const creteStore = redux.createStore;

const initialState = {
    value: 0,
    age: 25
}

// Reducer
const rootReducer = (state = initialState, action) => {
    // console.log(action)
    // if (action.type === 'ADD_AGE') {
    //     return {
    //         ...state,
    //         age: state.age + 1
    //     }
    // }
    // if (action.type === 'CHANGE_VALUE') {
    //     return {
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
    return state;
}

// Store
const store = creteStore(rootReducer);
console.log(store.getState())

// Subscription
store.subscribe(() => {
    console.log('store change: ', store.getState())
})

// Despatching Action
store.dispatch({ type: 'ADD_AGE' })
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 })
console.log(store.getState());
