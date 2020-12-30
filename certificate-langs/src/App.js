import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.scss';
import ActionButton from './components/ActionButton.js';
import Slider from './components/Slider.js';
import Popup from './components/Popup.js';
import HeaderTitle from './components/HeaderTitle.js';
import {tp} from "./functions.js"

const language = "Spanish"

const titles = {
  a2: "Beginner ",
  b1: "Intermediate ",
  b2: "Advanced ",
  c1: "Fluent ",
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderScreen: 2,
      level: 'a2',
      payment: true,
      explanation: false
    }
    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.endShow = this.endShow.bind(this)
    this.openLevel = this.openLevel.bind(this)
    this.showPayment = this.showPayment.bind(this)
    this.toCert = this.toCert.bind(this)
    this.setLevel = this.setLevel.bind(this)
  }

  // screen loaded 
  // subscreen opened // lang + [A2, B1, B2, C1]
  // purchase button clicked // lang + [A2, B1, B2, C1]
  // purchase confirmed // lang + [A2, B1, B2, C1]

  componentDidMount(){
    tp(`cer_${language}_start`)
  }

  handleSliderChange(desiredSliderScreen){
    this.setState({sliderScreen: desiredSliderScreen})
  }

  openLevel(level){
    tp(`Cer_${language.substr(0,3)}_${level}_opened`)
    this.setState({
      level: level,
      sliderScreen: 2
    })
  }

  endShow(){
    tp(`cer_${language.substr(0,3)}_${this.state.level}_purchased`)
    this.setState({
      payment: false,
      explanation: true
    })
  }

  showPayment() {
    tp(`cer_${language.substr(0,3)}_${this.state.level}_buy_clckd`)
    this.setState({payment: true})
  }

  toCert() {this.setState({sliderScreen: 0})}
  setLevel(level) {this.setState({level: level})}

  render(){
    const LevelBox = ({level}) => {

      const backgrounds = {
        a2: "Beginner ",
        b1: "Intermediate ",
        b2: "Advanced ",
        c1: "Fluent ",
      }

      return (
        <div className={"level-box " + level + "-box"} onClick={() => this.openLevel(level)}>
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
          {['a2', 'b1', 'b2', 'c1'].map((level) => <LevelBox key={level} level={level}/>)}
        </div>
      )
    }

    const ImagePerk = ({image, title, desc}) => {
      return (
        <div className="row mb-4">
          <div className="col-auto d-flex align-items-center pr-2">
            <img className="imageperk-image" src={image}/>
          </div>
          <div className="col">
            <p className="bolder text-sm">{title}</p>
            <p className="text-sm">{desc}</p>
          </div>
        </div>
      )
    }

    const CheckmarkPerk = ({desc}) => {
      return (
        <div className="d-flex pb-3">
          <img className="pr-2 mt-2 checkmark" src="./checkmark.png"/>
          <p className="text-sm">{desc}</p>
        </div>
      )
    }

    const GetCertificate = () => {
      return (
      <>
        <div className="new-icon">NEW</div>
        <div className="main-content-holder">
          <div className="p-relative">
            <div className="corner-tag">
              {/* is there any way we can have actual price matrix */}
              <p className="just-price">Just $17.99</p>
              <p className="main-price">$9.99</p>
            </div>
          </div>
          <div className="d-flex my-3">
            <img src="./tandem-star.png" id="tandem-star" className="m-auto"/>
          </div>          
          <div className="pb-4">
            <p className="text-lg text-center bold">Tandem Certificate</p>
            <p className="text-center text-sm">Take a test to certify your language level</p>
            <div className='text-center now-in'><p className="text-sm now-in-text">{`Now available in ${language}!`}</p></div>
          </div>
          <LevelBoxes/>
          <div className="mt-4">
            <ImagePerk title="Take the test online" desc="Any time, right here on your mobile phone or tablet" image="./ic-test.png"/>
            <ImagePerk title="Finish in 45 minutes" desc="Get your results immediately" image="./ic-time.png"/>
            <ImagePerk title="Get certificate for $9.99" desc="Take advantage of our limited time offer" image="./ic-money.png"/>
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
      return (
        <div className="p-3">
          <h5 className="mb-0 darker-grey">Certificates</h5>
          <div className="grey-line"></div>
          <p className="pt-1 mb-5">Haven't earned any certificates yet</p>
          <h5 className="darker-grey">Purchase history</h5>
          <div className="grey-line"></div>
          <p>You haven't purchased any certificates yet</p>
        </div>
      )
    }

    const Explanation = () => {
      return (
        <Popup title="Thanks for your interest" description={`You were not charged anything. Certificates are currently not available in ${language} but we hope to offer them soon.`} buttonText="I understand" overlayHandler={() => this.setState({explanation: false})}/>
      )
    }

    const Subscreen = () => {
      const prompt = {
        a2: "developing",
        b1: "great",
        b2: "excellent",
        c1: "flawless",
      }

      return (
        <>
          {console.log(this.state.explanation)}
          {this.state.explanation === true ? <Explanation/> : null}
          {this.state.payment === true ? <PaymentPopup/> : null}
          <div className={this.state.level + "-background subscreen-background p-relative"}>
            <HeaderTitle title={titles[this.state.level] + " " + language + " " + this.state.level.toUpperCase()} backHandler={this.toCert}/>
            <p className="ml-3 pb-3 mt-5 bolder col-7">{`Prove your ${prompt[this.state.level] + " " + language} skills`}</p>
            <div className="white-star">
              <div className="m-auto">
                <p className="text-xs">Just</p>
                <p className="text-md">$9.99</p>
                <p className="just-price">$18.99</p>
              </div>
            </div>
          </div>
          <div className="test-breakdown">
            <div className="d-flex space-between">
              <p className="bolder">Test Breakdown</p>
              <p className="bolder">45 Minutes</p>
            </div>
            <div className="d-flex">
              <img src="./pie.png" id="pie"/>
              <div className="container d-flex align-items-center">
                <div className="">
                  <div className="row align-vertical">
                    <div className="small-circle blue-1"></div>
                    <p className="text-xxs">Listening comprehension</p>
                  </div>
                  <div className="row align-vertical">
                    <div className="small-circle blue-2"></div>
                    <p className="text-xxs">Reading comprehension</p>
                  </div>
                  <div className="row align-vertical">
                    <div className="small-circle blue-3"></div>
                    <p className="text-xxs">Grammar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
            <img src="./discount.png" id="discount"/>
          </div>
          <p className="px-4 text-center">Take advantage of our <span className="bolder dark-blue">limited-time 60% discount!</span> Buy now and take the test whenever you're ready.</p>
          <ActionButton text="Buy Now for $10.99" specClass="cert-btn" actionHandler={this.showPayment}/>
        </>
      )
    }

    const PaymentPopup = () => {
      return ( 
        <>
          <div className="payment-container px-3 py-2">
            <div>
              <img src="./playlogo.jpg" id="play-logo"/>
            </div>
            <div className="grey-line"></div>
            <div className="d-flex">
              <img src="./tandemlogo.jpg" id="tandem-logo"/>
              <div className="w-100">
                <div className="row pl-2">
                  <p className="bolder ws-none col-8">Tandem Certificate - {language}</p>
                  <p className="col bolder text-right">$9.99</p>
                </div>
                <p className=" pl-2 small-grey-text col-8">Tandem Language Exchange: Speak & learn languages</p>
              </div>
            </div>
            <div className="grey-line"></div>
            <div>
              <p className="small-grey-text">Your refund rights vary by product type. See the Google Play Terms of Service and Refund Policy for more.</p>
            </div>
            <div className="green-button text-center p-2 mt-3 mb-2" onClick={this.endShow}>
              <p className="bolder dark-grey">1-tap buy</p>
            </div>
          </div>
          <div className="overlay-black" onClick={() => this.setState({payment: false})}></div>
        </>
      )
    }

    return (
      <div className="App">
        {this.state.sliderScreen < 2 ? <Slider title1={"Get Certificate"} title2={"My Certificates"} sliderScreen={this.state.sliderScreen} handleSliderChange={this.handleSliderChange}/> : null}
        {this.state.sliderScreen === 0 ? <GetCertificate/> : this.state.sliderScreen === 1 ? <MyCertificates/> : <Subscreen level={this.state.level}/>}
      </div>
    );
  }
}

export default App;