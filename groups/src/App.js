import React, { Component } from 'react'
import ActionButton from "./components/ActionButton"
import Category from "./components/Category"
import './App.scss';

const categoryData = {
  seriousLearning: {
    title: "Serious learning",
    description: "Find other learners looking to rapidly improve their language skills",
    image: "/alex.png"
  },
  relaxedLearning: {
    title: "Relaxed learning",
    description: "Meet language learners interested in chatting while improving their language skills.",
    image: "/alex.png" 
  },
  justChatting: {
    title: "Just chatting",
    description: "Meet and chat with Tandem members from all over the world.",
    image: "/alex.png" 
  },
  hobbiesAndInterests: {
    title: "Hobbies and interests",
    description: "Find out what people do for fun around the globe.",
    image: "/alex.png" 
  },
  tandemPair: {
    title: "Tandem Pair",
    description: "Join a group with another English speaker and two Spanish speakers.",
    image: "/alex.png" 
  }
}

const chatData = {
  seriousLearning: ["Grammar tips", "Useful vocab + phrases", "Pronounciation help", "Learning resources"],
  relaxedLearning: ["What are your favorite ways to learn?", "Learning tips", "Big group Tandem", "Book recommendations"],
  justChatting: ["How's your day?", "Introduce yourself!", "What is the meaning of life?", "Gossip"],
  hobbiesAndInterests: ["Sports", "TV Shows", "Music", "Exploring nature"]
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      screen: "category_hobbiesAndInterests",
      popup: false
    }
    this.handleScreenChange = this.handleScreenChange.bind(this)
    this.handleBackToPublic = this.handleBackToPublic.bind(this)
  }

  componentDidMount() {}

  handleScreenChange(screen){
    if (this.state.screen == screen){return}
    this.setState({screen})
  }

  handleOpenGroup(group){
    let screen = "category_" + group
    if (group == "tandemPair"){
      return this.handleEndIllusion()
    }
    this.setState({screen})
  }

  handleBackToPublic(){
    this.setState({screen: "public"})
  }

  handleEndIllusion(){
    alert("It's a prank, bro")
  }
  
  render() {
    let Screen = () => null

    // if on the public screen
    if (this.state.screen == "public"){
      Screen = () => {return (
        <div className="row-holder">
          {Object.keys(categoryData).map(category => {
            return <Category data={categoryData[category]} onClick={() => this.handleOpenGroup(category)} itemType="category"/>
          })
          }
        </div>
      )}
    }

    // if on the private screen 
    else if (this.state.screen == "private"){
      Screen = () => {return (
        <div>
          <p>Looks like you don't have any group chats yet...</p>
          <ActionButton text="Start a private group chat" color="blue" fixed={true}/>
        </div>
      )}
    }

    // if inside a group category
    else if (this.state.screen.split("_")[0] == "category"){
      var category = this.state.screen.split("_")[1]
      
      // should randomize images here to prevent duplicates 
      // should randomize numbers here to prevent duplicates 

      Screen = () => {return (
        <>
        <div className="category-header d-flex">
          <div className="back-arrow col-1" onClick={this.handleBackToPublic}>
            BACK
          </div>
          <div className="back-arrow col-10 text-center">
            <p className="category-title">{categoryData[category].title}</p>
          </div>
        </div>
        <div className="row-holder">
        {chatData[category].map((item, i) => {
          return <Category data={item} key={i} itemType="chat"/>
        })
        }
      </div>
      <div className="fixed-button-pos text-center">
        <p>Want to chat about something else?</p>
        <ActionButton text="Start new public group chat" color="blue"/>
      </div>
      </>
      )}
    }

    return (
      <div className="app h-100">
        <div className={"popup w-100 h-100 " + (this.state.popup ? "d-flex": "d-none")}></div>
        {this.state.screen == "public" || this.state.screen == "private" 
        ? <div className="sliding-header d-flex">
          <div className={"tab-slider col-6 text-center bold " + (this.state.screen == "public" ? 'blue' : null)} onClick={() => this.handleScreenChange("public")}><p>Public</p></div>
          <div className={"tab-slider col-6 text-center bold " + (this.state.screen == "private" ? 'blue' : null)} onClick={() => this.handleScreenChange("private")}><p>Private</p></div>
        </div>
        : null}
        <Screen/>
      </div>
    )
  }
}

export default App
