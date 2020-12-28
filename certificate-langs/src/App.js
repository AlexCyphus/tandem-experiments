import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.scss';
import ActionButton from './components/ActionButton.js';
import Row from './components/Row.js';
import Slider from './components/Slider.js';
import Popup from './components/Popup.js';
import InfoCard from './components/InfoCard.js';
import HeaderTitle from './components/HeaderTitle.js';
import FixedButton from './components/FixedButton.js';
import {tp, shuffleArray, postToSheets} from "./functions.js"

const language = "Spanish"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderScreen: 0,
      level: ''
    }
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  handleSliderChange(desiredSliderScreen){
    this.setState({sliderScreen: desiredSliderScreen})
  }

  openLevel(title){
    console.log(title)
  }

  render(){
    const LevelBox = ({level}) => {

      const titles = {
        a2: "Beginner ",
        b1: "Intermediate ",
        b2: "Advanced ",
        c1: "Fluent ",
      }

      const backgrounds = {
        a2: "Beginner ",
        b1: "Intermediate ",
        b2: "Advanced ",
        c1: "Fluent ",
      }

      return (
        <div className="level-box" Style={{backgroundImage: backgrounds[level]}} onClick={(title) => this.openLevel(title)}>
          <p className="level-box-level">{level.toUpperCase()}</p>
          <div className="level-box-title">
            <p className="level-box-title-text">{titles[level]}</p>
            <p className="level-box-title-text">{language}</p>
          </div>
        </div>
      )
    }

    const LevelBoxes = () => {
      return (
        <div className="level-boxes">
          {['a2', 'b1', 'b2', 'c1'].map((level) => <LevelBox level={level}/>)}
        </div>
      )
    }

    const ImagePerk = ({image, title, desc}) => {
      return (
        <div className="row">
          <div className="col-3">
            <image src={image}/>
          </div>
          <div className="col-9">
            <p className="bolder text-sm">{title}</p>
            <p className="text-sm">{desc}</p>
          </div>
        </div>
      )
    }

    const CheckmarkPerk = ({desc}) => {
      return (
        <div className="d-flex pb-3">
          <p className="pr-2">✅</p>
          <p className="text-sm">{desc}</p>
        </div>
      )
    }

    const GetCertificate = () => {
      return (
      <>
        <Slider 
          title1={"Get Certificate"}
          title2={"My Certificates"}
          sliderScreen={this.state.sliderScreen}
          handleSliderChange={this.handleSliderChange}
        />
        <div className="new-icon">NEW</div>
        <div className="main-content-holder">
          <div className="p-relative">
            <div className="corner-tag">
              {/* is there any way we can have actual price matrix */}
              <p className="just-price">Just $17.99</p>
              <p className="main-price">$9.99</p>
            </div>
          </div>
          <div className="text-center py-3">😃</div>
          <div className="pb-4">
            <p className="text-lg text-center bold">Tandem Certificate</p>
            <p className="text-center text-sm">Take a test to certify your language level</p>
          </div>
          <LevelBoxes/>
          <div className="mt-4">
            <ImagePerk title="Take the test online" desc="Any time, right here on your mobile phone or tablet" />
            <ImagePerk title="Finish in 45 minutes" desc="Get your results immediately" />
            <ImagePerk title="Get certificate for $9.99" desc="Take advantage of our limited time offer" />
          </div>
          <p className="bolder text-sm mt-4">What you get</p>
          <div className="grey-line"></div>
          <CheckmarkPerk desc="Your certificate as a PDF to download"/>
          <CheckmarkPerk desc="A badge on your Tandem profile certifying your language level"/>
          <CheckmarkPerk desc="A scorecard with your exam results, including strengths and weaknesses"/>
          <CheckmarkPerk desc="The chance to retake the test if you don't pass the first time"/>
          <div className="star-price-outer">
            <div className="star-price-inner">
              <p>Just</p>
              <p className="main-price">$9.99</p>
              <p className="just-price">$18.99</p>
            </div>
          </div>
          <LevelBoxes/>
        </div>
      </>
      )
    }

    const MyCertificates = () => {
      return null
    }

    const Subscreen = () => {
      return null
    }

    return (
      <div className="App">
        {this.state.sliderScreen === 0 ? <GetCertificate/> : this.state.sliderScreen === 1 ? <MyCertificates/> : <Subscreen/>}
      </div>
    );
  }
}

export default App;