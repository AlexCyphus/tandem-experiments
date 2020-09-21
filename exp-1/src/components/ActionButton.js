import React from 'react';

function ActionButton({action, text, specId, fixed=false}) {

  if (fixed){var classes = "seeMoreButton fixed-button-pos"}
  else {var classes = "seeMoreButton"}

  return ([
    <a className="no-underline" onClick={action}>
      <div className="seeMoreContainer d-flex" id={specId}>
        <div className={classes} >
          <p className="m-0 no-underline">{text}</p>
        </div>
      </div>
    </a>
  ])
}

export default ActionButton
