import React, { useState, useEffect} from "react";

function EffectTutorial(){
    const [data, setData] = useState("");
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setData("email: kahsfkjhsd@ozone.one");
        console.log("API CALLED");
    },[]);

    return (
        <div>
            Hello world
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count+1);
            }}>click</button>
        </div>
    );
}

export default EffectTutorial;
