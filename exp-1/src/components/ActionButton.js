import React from 'react';

function ActionButton({action, text, specId, fixed=false, link}) {

  if (fixed){var classes = "seeMoreButton fixed-button-pos"}
  else {var classes = "seeMoreButton"}

  return ([
    <a href={link}>
      <div className="seeMoreContainer d-flex" id={specId}>
        <div className={classes} onClick={action}>
          <p className="m-0">{text}</p>
        </div>
      </div>
    </a>
  ])
}

export default ActionButton
