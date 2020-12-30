import React, { useState } from 'react';
import ActionButton from "./ActionButton";

// use conditional rendering in main file
export default function Popup({title, description, children, overlayHandler, placeholder, buttonText}) {
    return (
        <>
        <div className="overlay-black" onClick={overlayHandler}></div>
        <div className="popup-container pb-4">
            <p className='popup-title'>{title}</p>
            <div className="popup-description-holder">
                {description ? <p className='popup-description'>{description}</p>:children}
            </div>
            <ActionButton text={buttonText} actionHandler={overlayHandler}/>
        </div> 
        </>
    )
}