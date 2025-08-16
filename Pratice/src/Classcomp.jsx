import React, { Component } from 'react'

export default class Classcomp extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            name:"abc"
        }
    }
    minus(){
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
        
    }
  render() {
    return (
      <div>
        <h2> Visit our website : {this.props.web}</h2>
        <h3>Counter:{this.state.count}</h3>
        <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
        <button onClick={()=>this.minus()}>-</button>
        <h3>Name:{this.state.name}</h3>
        <button onClick={()=>this.setState({name:this.state.name="xyz"})}>Change name</button>

      </div>
    )
  }
}
