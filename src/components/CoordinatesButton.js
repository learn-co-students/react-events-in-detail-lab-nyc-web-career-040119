// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

  handleOnClick=(e)=>{
    return this.props.onReceiveCoordinates([e.clientX,e.clientY])
  }

  render(){
    return(
      <div>
      <button onClick={this.handleOnClick} >PRESS ME</button>
      </div>
    )
  }
}

export default CoordinatesButton
