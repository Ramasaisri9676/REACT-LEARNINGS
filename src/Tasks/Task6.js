import React, { useRef } from 'react';

function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus(); // Focus the input field
    };

    return (
        <div>
            <p>FocusInput</p>
            <input ref={inputRef} type="text" placeholder="Type something..." />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}

export default FocusInput;
