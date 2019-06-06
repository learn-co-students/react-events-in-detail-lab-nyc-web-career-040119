// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

  handleCoords = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <button onClick={this.handleCoords}>Coordinates</button>
    )
  }
}

export default CoordinatesButton
