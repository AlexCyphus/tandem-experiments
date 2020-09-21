import React, { Component } from 'react'
import Post from "./components/Post"
import Popup from "./components/Popup"
import ActionButton from "./components/ActionButton"
const mysql = require('mysql');


class App extends Component {
  constructor() {
    super()
    this.state = {
      card: 0,
      id: 0
    }
    this.togglePopup = this.togglePopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickContent = this.clickContent.bind(this);
    this.clickFeedback = this.clickFeedback.bind(this);
  }

  // don't load anything for a second
  // more diversity of content
  // text area answering box should be clearing responses and the keyboard shouldn't cover it. https://stackoverflow.com/questions/51606099/how-to-detect-when-keyboard-is-opened-or-closed-in-react-native
  // send clicks to the backend
  //  CLEARDB_DATABASE_URL: mysql://ba7f4376abe00d:2aaec46f@us-cdbr-east-02.cleardb.com/heroku_aaae19a4220d4fe?reconnect=true

  componentDidMount() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET','/api/initiate');
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        this.setState({id: JSON.parse(xhr.response).id});
      }
    }
  }

  sendJson(json, type="nada") {
    // im not using the sent json anymore im just too scared to delete it
    var xhr = new XMLHttpRequest()
    var url = ''
    if (type == "close") {var url = '/api/close_clicked'}
    else if (type == "content") {var url = '/api/content_clicked'}


    else {
      if (this.state.card == 0) {var url = '/api/see_more_clicked'}
      if (this.state.card == 1) {var url = "/api/upgrade_clicked"}
      if (this.state.card == 2) {var url = "/api/give_feedback_clicked"}
    }

    xhr.open('PUT', url)
    xhr.setRequestHeader('Content-type','application/json');
    var json = JSON.stringify(json)
    xhr.send(json)
  }

  togglePopup(button=true) {
    var newCard = this.state.card + 1
    this.setState({card: newCard});
    if (button) {
      this.sendJson({id: this.state.id})
    }
  }


  handleChange(e){
    this.setState({value: e});
  }

  handleSubmit(){
    // send to the backend
  }

  closePopup(){
    this.setState({card: 0})
    this.sendJson({literally: "whatever"}, "close")
  }

  clickContent(){
    this.togglePopup(false)
    this.sendJson({literally: "whatever"}, "content")
  }

  clickFeedback(e){
    this.sendJson()
    window.location = 'https://tandemteacher.typeform.com/to/vo9IWGhI'
  }

  handleSendData(data) {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {console.log(xhr.responseText)})
    xhr.open('GET','https://script.google.com/macros/s/AKfycbzvr-cEKCg6qEdLNl56REPxoMcLtdzhL_j4_R9iFZihbbvwRz5A/exec?data="' + data + "'")
    xhr.send()
  }

  //<button onClick={() => this.handleSendUsername('test')}>Hello World</button>

  render() {
    return (
      <div className="app">
        <Popup card={this.state.card} togglePopup={this.togglePopup} closePopup = {this.closePopup} value={this.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} clickFeedback={this.clickFeedback}/>
        <div>
        </div>
        <div className={this.state.card ? 'black' : ''}></div>
        <Post
          name="Alex"
          time="1"
          postImage="llama.png"
          message="Have you ever been to Peru? I just got to Nazca and am absolutely in love with Peruvian culture. I got spat on by a llama but that's okay. ¡Viva Perú!"
          likes="155"
          comments="55"
          togglePopup = {this.clickContent}
          userImage = "alex.png"
        />
        <Post
          name="Tamara"
          time="15"
          message="Has anyone read the Harry Potter series? I have never read it before 😬. Would you recommend it? What is so great about it? Is the British English hard to understand?"
          likes="20"
          comments="3"
          userImage = "tamara.png"
          togglePopup = {this.clickContent}
        />
        <Post
          name="Chelsea"
          time="36"
          postImage="audio.png"
          message="How's my prounciation?"
          likes="43"
          comments="32"
          userImage = "chelsea.png"
          specId = "audio"
          togglePopup = {this.clickContent}
        />
        <ActionButton action={this.togglePopup} text="SEE MORE" specId="see-more"/>
      </div>
    )
  }
}

export default App
