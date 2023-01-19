import React, { useCallback, useState } from "react";
import Child from './Child';

function CallBackTutorials() {
    const [toggle,setToggle] = useState(false);
    const [data,setData] = useState("Hi I am Atharv");

    const returnComment = useCallback((name)=>{
        return data+name;
    }, [data]);
    return(
        <div>
            <h1>For useCallBack</h1>
            <Child returnComment={returnComment} />
            <button onClick={()=>{
                setToggle(!toggle);
            }}>{" "}Toggle</button>
            {toggle && <h1>Toggle</h1>}
        </div>
    );
};


export default CallBackTutorials;