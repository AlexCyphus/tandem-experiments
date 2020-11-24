import React from 'react'
import './App.scss';
import ActionButton from './components/ActionButton.js';
import Row from './components/Row.js';
import Slider from './components/Slider.js';
import Popup from './components/Popup.js';
import InfoCard from './components/InfoCard.js';

function tp(name){
  // const NativeApp = window.NativeApp // real version
  const NativeApp = {sendTrackingPoint: (name) => {console.log(name)}} // mock version
  if (name == undefined){return null}
  const prefix = "Exp_Grp_"
  name = prefix + name
  NativeApp.sendTrackingPoint(name)
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderScreen: 0,
      popup: true,
      infocard: false
    }
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  handleSliderChange(desiredSliderScreen){
    this.setState({sliderScreen: desiredSliderScreen})
  }

  render(){
    return (
      <div className="App">
        <Slider 
          title1={"Hello"}
          title2={"World"}
          sliderScreen={this.state.sliderScreen}
          handleSliderChange={this.handleSliderChange}
        />
        <Row title="Computer McComputerface" image="./test-image.jpeg">
          <p>Now I can put anything I want in here</p>
        </Row>
        <Row title="Computer McComputerface" image="./test-image.jpeg">
          <p>Now I can put anything I want in here</p>
        </Row>
        <ActionButton text={"hello world"} color={"pink"} close={true}/>
        {this.state.popup ? <Popup buttonText={"I am button"} text="i am description" placeholder="i am placeholder" title="poppy"><h1>helo</h1></Popup> : null}
        {this.state.infocard ? 
        <InfoCard buttonText={"I am button"} title={"I am infocard"}>
          <p>HELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLD</p>
        </InfoCard>
        :
        null
        }
      </div>
    );
  }
}

export default App;
