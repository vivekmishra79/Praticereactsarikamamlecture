import {Component} from 'react'
import Classcomp from './Classcomp'
import Empdata from './Empdata'

export default class App extends Component {
    constructor(){
      super()
      this.state={
        
        webname:"https://www.sevon mentor.com"
      }

    }

    render() {
      return (
        <div>
          <h1>Class Component</h1>
          <Classcomp web={this.state.webname}/>
          <Empdata/>
        </div>
        
      )
    }
  
}