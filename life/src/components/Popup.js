import React from 'react';
import { ChatBubble, ThumbUpAlt } from '@material-ui/icons';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ActionButton from "./ActionButton"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Popup({card, togglePopup, closePopup, value, handleChange, handleSubmit, clickFeedback}) {
  if (!card){var display = "none"}

  return ([
    <div>
      <div style={{ display: display }} onClick={closePopup} className="close-button"><img src={'/remove.svg'} /></div>
      <div className={card ? 'overlayCard' : 'd-none'}>
        
      </div>
    </div>
  ])
}

export default Popup
