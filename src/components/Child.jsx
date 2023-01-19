import React, { useEffect } from "react";

function Child({ returnComment }){

    useEffect(()=>{
        console.log("Function called");
    }, [returnComment]);

    return(
        <div>
            {returnComment("Pedro")}
        </div>
    );
}

export default Child;