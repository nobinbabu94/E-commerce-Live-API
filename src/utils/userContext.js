import React,{ createContext, useState } from "react";

export const userContext = createContext({user:'BC'})


export default function Context ({children}) {
    const [user,setUser] = useState('nobin')

    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}