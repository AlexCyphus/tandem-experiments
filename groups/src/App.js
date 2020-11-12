import React, { Component } from 'react'
import ActionButton from "./components/ActionButton"
import Category from "./components/Category"
import './App.scss';

const categoryData = {
  seriousLearning: {
    title: "Serious learning",
    description: "Find other learners looking to rapidly improve their language skills",
    image: "/emojis/12.png"
  },
  relaxedLearning: {
    title: "Relaxed learning",
    description: "Meet language learners interested in chatting while improving their language skills.",
    image: "/emojis/6.png" 
  },
  justChatting: {
    title: "Just chatting",
    description: "Meet and chat with Tandem members from all over the world.",
    image: "/emojis/8.png" 
  },
  hobbiesAndInterests: {
    title: "Hobbies and interests",
    description: "Find out what people do for fun around the globe.",
    image: "/emojis/3.png" 
  },
  tandemPair: {
    title: "Tandem Pair",
    description: "Join a group with another English speaker and two Spanish speakers.",
    image: "/emojis/5.png" 
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
      popup: true,
      publicGroup: true
    }
    this.handleScreenChange = this.handleScreenChange.bind(this)
    this.handleBackToPublic = this.handleBackToPublic.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
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

  togglePopup(public){
    
    var isPublic = ""
    var popup = ""
    
    if (public){isPublic = true}

    else {isPublic = false}


    if (this.state.popup){
      this.setState({popup: false})
    }

    else {
      this.setState({popup: true})
    }
    
  }
  
  render() {
    let Screen = () => null

    // if on the public screen
    if (this.state.screen == "public"){
      Screen = () => {return (
        <>
          <div className="row-holder">
            {Object.keys(categoryData).map(category => {
              return <Category data={categoryData[category]} onClick={() => this.handleOpenGroup(category)} itemType="category"/>
            })
            }
          </div>
          <ActionButton text="See more" color="blue"/>
        </>
      )}
    }

    // if on the private screen 
    else if (this.state.screen == "private"){
      Screen = () => {return (
        <div>
          <p>Looks like you don't have any group chats yet...</p>
          <ActionButton text="Start a private group chat" color="blue" fixed={true} action={() => this.togglePopup(false)}/>
        </div>
      )}
    }

    // if inside a group category
    else if (this.state.screen.split("_")[0] == "category"){
      var category = this.state.screen.split("_")[1]
      
      // should randomize these here to prevent duplicates
      const emojis = Array.from({length: 13}, (_, i) => i + 1)
      const flags = Array.from({length: 11}, (_, i) => i + 14)
      const groupSizes = [6, 11, 22, 105]

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
      }
      
      // random for each 
      var chatsFlags = []

      var randomData = {
        screensEmojis: shuffleArray(emojis).slice(0,4),
        screensGroupSizes: shuffleArray(groupSizes)
      }

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
          chatsFlags = shuffleArray(flags).slice(0, 4)
          return <Category data={item} key={i} itemType="chat" randomData={randomData} index={i} chatsFlags={chatsFlags}/>
        })
        }
      </div>
      <div className="fixed-button-pos text-center">
        <p>Want to chat about something else?</p>
        <ActionButton text="Start new public group chat" color="blue" action={() => this.togglePopup(true)}/>
      </div>
      </>
      )}
    }

    return (
      <div className="app h-100">
        <div className={"popup-main px-3 " + (this.state.popup ? "d-block": "d-none")}>
          <p className='text-center create-group-title'>{this.state.publicGroup ? "Create a public group" : "Create a private group"}</p>
          <p className='text-center'>{this.state.publicGroup ? "Create a group chat that anyone on Tandem with your language pairing can join." : "Create a private group chat and invite your Tandem partners to join."}</p>
          <div className="input-holder">
            <input placeholder="Group name"></input>
            <input placeholder="Group category"></input>
          </div>
          <ActionButton text={this.state.publicGroup ? "Create Public Group Chat" : "Create Private Group Chat"} color="blue" specId="create-group-chat"/>
          <p className="text-center mb-2" onClick={this.togglePopup}>Cancel</p>
        </div>
        <div className={"overlay w-100 h-100 " + (this.state.popup ? "d-flex": "d-none")}></div>
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
