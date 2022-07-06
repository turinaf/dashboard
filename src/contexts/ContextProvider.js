import React, {createContext, useContext, useState } from "react";

const StateContext = createContext();
 const initializeState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,

 }

 export const ContextProvider = ({children}) => {

    // Use state for activeMenu, whether side bar is open or not.
    const [activeMenu, setActiveMenu] = useState(true)

    // Use state to know which icon is clicked, Chat, cart, profile notification..
    const [isClicked, setIsClicked] = useState(initializeState)

    const handleClick = (clicked) => {
        setIsClicked({...initializeState, [clicked]:true});
    }
    
    return (
        <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
        }}
        >
            {children}
        </StateContext.Provider>
    )
 }

 export const useStateContext = () => useContext(StateContext);
