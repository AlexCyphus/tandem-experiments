import React, { Component } from 'react'
import Post from "./components/Post"

class App extends Component {
  constructor() {
    super()
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
        <p>Tandem Life</p>
        <Post
          name="Alex"
          time="1"
          image="llama.png"
          message="Have you ever been to Peru? I just got to Nazca and am absolutely in love with Peruvian culture. I got spat on by a llama but that's okay. ¡Viva Perú!"
          likes="155"
          comments="55"
        />
      </div>
    )
  }
}

export default App
