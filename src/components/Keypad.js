// Code Keypad Component Here
import React from "react";
import Password from "./Password"

function Keypad (){
    function handleOnChange() {
        console.log('Entering a password...')
    }

    return (
        <input type=<Password/> onChange={handleOnChange}></input>
    )
}

export default Keypad;