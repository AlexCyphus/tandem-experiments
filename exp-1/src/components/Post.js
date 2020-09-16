import React from 'react';
import { ChatBubble, ThumbUpAlt } from '@material-ui/icons';

const test = "d-none"

function Post({name, time, message, postImage=false, audio=false, likes, comments, userImage, specId, togglePopup}) {

  var img
  postImage == false ? img="d-none" : img=""

  var aud
  audio == false ? aud="d-none" : aud=""

  return ([
    <div onClick={togglePopup}>
      <div className="outer-post container">
        <div className="inner-post">
          <div className="row w-100 post-poster m-0">
            <img src={'/'+ userImage} className="col-auto icon-image"/>
            <p className="col-auto m-auto bold">{name}</p>
            <p className="col text-right m-auto time">{time}m</p>
          </div>
          <p className="w-100 m-0 message">{message}</p>
          <img src={"/"+postImage} className= {"col-auto posted-image m-0 " + img} id={specId}/>
          <img src={"/"+aud} className= {"col-auto posted-image p-0 m-0 " + aud}/>
          <div className="row m-0 reactions">
            <div className="reaction col-auto row">
              <div className="col-auto pr-1 pl-0"><ThumbUpAlt style={{ fontSize: 30 }}/> </div>
              <div className="col-auto pl-1 count d-flex"><p className="m-auto">{likes}</p></div>
            </div>
            <div className="reaction col-auto row">
              <div className="col-auto pr-1 p-0 m-auto"><ChatBubble style={{ fontSize: 25 }}/></div>
              <div className="col-auto p-1 count"><p className="m-0">{comments}</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="brd"></div>
    </div>
  ])
}

export default Post
