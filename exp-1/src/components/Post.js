import React from 'react';
import { ChatBubble, ThumbUpAlt } from '@material-ui/icons';

const test = "d-none"

function Post({name, time, message, image=false, audio=false, likes, comments}) {

  var img
  image == false ? img="d-none" : img=""

  var aud
  audio == false ? aud="d-none" : aud=""

  return ([
    <div>
      <div className="outer-post container">
        <div className="inner-post">
          <div className="row w-100 post-poster m-0">
            <img src="/logo192.png" className="col-auto icon-image"/>
            <p className="col-auto m-auto name">{name}</p>
            <p className="col text-right m-auto time">{time}m</p>
          </div>
          <p className="w-100 m-0 message">{message}</p>
          <img src={"/"+image} className= {"col-auto posted-image m-0 " + img}/>
          <img src={"/"+aud} className= {"col-auto posted-image p-0 m-0 " + aud}/>
          <div className="row m-0 reactions">
            <div className="reaction col-auto row">


              <div className="col-auto pl-1"><ThumbUpAlt style={{ fontSize: 30 }}/> </div>
              <div className="col-auto pl-1 count">{likes}</div>
            </div>
            <div className="reaction col-auto row">
              <div className="col-auto pl-1 m-auto"><ChatBubble style={{ fontSize: 25 }}/></div>
              <div className="col-auto p-0 count">{comments}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="brd"></div>
    </div>
  ])
}

export default Post
