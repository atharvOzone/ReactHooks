import React, { useState, createContext} from "react";
import Login from './login';
import User from './user';

export const AppContext = createContext(null);

function ContextTutorial(){

    const [username, setUsername] = useState("");
    return(
        <>
        <h1>For CreateContext: </h1>
        <AppContext.Provider value={{ username, setUsername }}>
            <Login />
            <User />
        </AppContext.Provider>
        </>
        
    );
}

export default ContextTutorial;