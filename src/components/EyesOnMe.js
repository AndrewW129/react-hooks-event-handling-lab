// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function handleBlur() {
        console.log('Hey, Eyes on me!')
    }

    function handleFocus() {
        console.log('Good!')
    }
    return (
        <button onBlur={handleBlur} onFocus={handleFocus} >EyesOnMe</button>
    )
}

export default EyesOnMe