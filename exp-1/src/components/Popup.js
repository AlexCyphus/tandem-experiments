import React from 'react';
import { ChatBubble, ThumbUpAlt } from '@material-ui/icons';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ActionButton from "./ActionButton"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Popup({card, togglePopup, closePopup, value, handleChange, handleSubmit}) {
  if (!card){var display = "none"}

  return ([
    <div>
      <div style={{ display: display }} onClick={closePopup} className="close-button"><img src={'/remove.svg'} /></div>
      <div className={card ? 'overlayCard' : 'd-none'}>
        <div className={card === 1 ? 'container page-1 page' : "d-none"}>
          <div className="page-header row">
            <p className="col-auto m-auto text-center big-text title">Tandem Life</p>
          </div>
          <div className="lightbulb row justify-content-center">
            <EmojiObjectsIcon style={{ fontSize: 80 }}/>
          </div>
          <div className="text-center text-container row p-0">
            <div className="m-auto">
              <p className="col-12">Upgrade to <span className="bold-pink">Tandem Pro</span> to gain access to <span className="bold">Tandem Life</span> and see and learn from statuses, audios, and images from all over the world.</p>
              <p className="col-12 m-0">Post your own questions or content and meet new Tandem partners.</p>
            </div>
          </div>
          <ActionButton text="UPGRADE FOR $2.99" specId={'upgrade'} action={togglePopup} fixed={true}/>
        </div>
        <div className={card === 2 ? 'overlayCard page' : "d-none"}>
          <div className="page-header row">
            <p className="col-auto m-auto text-center big-text">Sorry...</p>
          </div>
          <div className="text-center row text-container-2">
            <p className="col-12 m-auto">This feature is not currently available. We would love to know what in particular interests you about the feature...</p>
          </div>
          <form onSubmit={handleSubmit} className="main-form">
            <textarea value={value} onChange={handleChange}/>
            <ActionButton text="SUBMIT" specId={'submit'} action={togglePopup} fixed={true}/>
          </form>
        </div>
        <div className={card === 3 ? 'overlayCard page' : "d-none"} id="page-3">
          <div className="page-header row">
            <p className="col-auto m-auto text-center big-text">Thanks</p>
          </div>
          <div className="text-center text-container-3 row pt-3">
            <p className="col-12">Your answers have been recorded.</p>
          </div>
          <ActionButton text="CLOSE" specId={'close'} action={closePopup} fixed={true}/>
        </div>
      </div>
    </div>
  ])
}

export default Popup
