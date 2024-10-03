import React, { useState } from "react";

export function ChangeName() {
    // Declare a state variable to hold the name
    const [name, setName] = useState("Rama");

    function eventHandler() {
        // Change the name state when the button is clicked
        setName("Saisri");
    }

    return (
        <div>
            <h1>{name}</h1> {/* Display the current name */}
            <button onClick={eventHandler}>Change Name</button>
        </div>
    );
}
