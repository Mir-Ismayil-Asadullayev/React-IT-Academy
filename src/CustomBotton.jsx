import React from 'react';
import button from './CustomButton.module.css'

function CustomButton({ text, Warnmessage, hint }) {
    const warnMessage = () => {
        alert(Warnmessage);
    }
    return (
        <>
            <button
                className={
                    button.button + " " + (Warnmessage ? button.warn : "") + " " + (hint ? button.cursive : "")
                }
                onClick={warnMessage}
            >
                {text}
            </button>
            {hint && <div className={button.toaster}>{hint}</div>}
        </>

    )
}

export default CustomButton;
