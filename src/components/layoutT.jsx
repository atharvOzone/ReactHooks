import React, { useLayoutEffect, useEffect, useRef } from "react";

function Layouteffect(){

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(()=> {
        inputRef.current.value="Atharv";
    }, [])
    return(
        <div>
            <h1>For Layout effect</h1>
            <input ref={inputRef} value="PEDRO" style={{ width: 400, height:60}} />
        </div>
    );
}

export default Layouteffect;