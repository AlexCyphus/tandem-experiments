import React from 'react';

function ActionButton({action, text, specId, fixed=false}) {

  if (fixed){var classes = "seeMoreButton m-auto fixed-button-pos"}
  else {var classes = "seeMoreButton m-auto"}

  return ([
    <div className="seeMoreContainer d-flex" id={specId}>
      <div className={classes} onClick={action}>
        <p className="m-0">{text}</p>
      </div>
    </div>
  ])
}

export default ActionButton
