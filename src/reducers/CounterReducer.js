
const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT"){
        return {counter: state.counter + 1}
    }
    if (action.type === "DECREMENT"){
        return {counter: state.counter - 1}
    }
    if (action.type === "ADD"){
        return {counter: state.counter + 3}
    }
    if (action.type === "SUBTRACT"){
        return {counter: state.counter - 3}
    }
    if (action.type === "INCVAL"){
        return {counter: state.counter + action.value}
    }
    if (action.type === "DECVAL"){
        return {counter: state.counter - action.value}
    }
    return state;
};

export default CounterReducer;