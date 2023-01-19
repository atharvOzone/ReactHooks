import React, { useReducer } from "react";

const reducer = (state,action) => {
    switch (action.type){
        case "INCREMENT":
            return {count:state.count+1, showText: state.showText};
        case "toggleText":
            return {count: state.count, showText: !state.showText};
        default:
            return state;
    }
};

const ReducerTutorial = () => {
    const [state,dispatch] = useReducer(reducer, {count:0, showText: true});

    return(
        <div>
            <h1>FOR useReducer</h1>
            <p>{state.count}</p>

            <button onClick={() => {
                dispatch({ type:"INCREMENT"});
                dispatch({ type:"toggleText"});
            }}>Click here</button>

            {state.showText && <p>Visible only when the state of showText is true</p>}
        </div>
    );
};


export default ReducerTutorial;