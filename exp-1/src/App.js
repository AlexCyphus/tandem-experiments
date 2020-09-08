import React, { Component } from 'react'
import Post from "./components/Post"
import Popup from "./components/Popup"
import ActionButton from "./components/ActionButton"

class App extends Component {
  constructor() {
    super()
    this.state = {card: 0,}
    this.togglePopup = this.togglePopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // don't load anything for a second
  // more diversity of content
  // text area answering box should be clearing responses and the keyboard shouldn't cover it. https://stackoverflow.com/questions/51606099/how-to-detect-when-keyboard-is-opened-or-closed-in-react-native
  // send clicks to the backend

  togglePopup() {
    var newCard = this.state.card + 1
    this.setState({card: newCard});
  }

  handleChange(e){
    this.setState({value: e});
  }

  handleSubmit(){
    // send to the backend
  }

  closePopup(){
    this.setState({card: 0})
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
        <Popup card={this.state.card} togglePopup={this.togglePopup} closePopup = {this.closePopup} value={this.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <div>

        </div>
        <div className={this.state.card ? 'black' : ''}></div>
        <Post
          name="Alex"
          time="1"
          image="llama.png"
          message="Have you ever been to Peru? I just got to Nazca and am absolutely in love with Peruvian culture. I got spat on by a llama but that's okay. ¡Viva Perú!"
          likes="155"
          comments="55"
          onClick = {this.togglePopup}
        />
        <Post
          name="Alex"
          time="1"
          image="llama.png"
          message="Have you ever been to Peru? I just got to Nazca and am absolutely in love with Peruvian culture. I got spat on by a llama but that's okay. ¡Viva Perú!"
          likes="155"
          comments="55"
        />
        <Post
          name="Alex"
          time="1"
          image="llama.png"
          message="Have you ever been to Peru? I just got to Nazca and am absolutely in love with Peruvian culture. I got spat on by a llama but that's okay. ¡Viva Perú!"
          likes="155"
          comments="55"
        />
        <ActionButton action={this.togglePopup} text="SEE MORE" specId="see-more"/>
      </div>
    )
  }
}

export default App
