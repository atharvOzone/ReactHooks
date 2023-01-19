import React, { useRef } from "react";

function RefTutorial(){
    const inputRef = useRef(null);

    const clickFunc = () => {
        inputRef.current.value = "";
    };
    return(
        <div>
            <h1>For useRef: </h1>
            <input type="text" placeholder="Enter text here..." ref={inputRef} />
            <button onClick={clickFunc}>Click</button>
        </div>
    );
}

export default RefTutorial;