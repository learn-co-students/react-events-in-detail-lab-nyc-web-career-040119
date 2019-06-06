// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
  coo = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <div>
        <button onClick={this.coo}></button>
      </div>
    )
  }
}

export default CoordinatesButton
