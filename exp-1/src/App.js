import React, { Component } from 'react'
import Post from "./components/Post"

class App extends Component {
  constructor() {
    super()
    this.state = {card: 0,}
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({card: 1});
    console.log(this.state.card)
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
        <div className={this.state.card ? 'overlayCard' : 'd-none'}>
            <p>Tandem Life</p>
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
        <div className="seeMoreContainer d-flex">
          <div className="seeMoreButton m-auto">
            <p className="m-0"onClick={this.togglePopup}>SEE MORE</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
