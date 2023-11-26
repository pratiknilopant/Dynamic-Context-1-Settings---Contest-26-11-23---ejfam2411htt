import React, { createContext, useState } from "react";


const UserContext = createContext()

const Wrapper = (props) => {
    const [useContext, setUserContext] = useState({
        greeting: "Hello",
        changeGreeting: (newGreeting) => {
            setUserContext((prevContext) =>  ({ ...prevContext, greeting: newGreeting}));
        },

    });

  
    return (
        <UserContext.Provider value={{ greeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }