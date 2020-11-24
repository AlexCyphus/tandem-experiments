export default function ActionButton({text, actionHandler, specId, size, color, close, closeHandler}) {
  
    // assign css class
    if (color == "pink"){color = "pink-background"}
    else {color = "blue-background"}
  
    return ([
        <>
            <a className="undecorated-link" onClick={actionHandler}>
                <div className="action-button-container" id={specId}>
                    <div className={"action-button-inner " + color} >
                    <p className="action-button-inner-text">{text.toUpperCase()}</p>
                    </div>
                </div>
            </a>
            {close == true 
            ? 
            <a className="undecorated-link" onClick={actionHandler}>
                <div className="close-button">
                    <p>Close</p>
                </div>
            </a>
            : null
            }
        </>
    ])
  }