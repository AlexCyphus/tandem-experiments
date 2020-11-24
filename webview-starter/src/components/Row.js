import { Children } from "react";

export default function Row({title, image, mainContent, rowClickHandler, children}) {
    return (
        <div className="row-container" onClick={rowClickHandler}>
            <div className="row-image-container">
                <img src={image} className="row-image"/>
            </div>
            <div className="row-text-container">
                <p className="row-title">{title}</p>
                {children}
            </div>
        </div>  
    )
}