import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (e) => {
    const x = e.clientX
    const y = e.clientY
    return this.props.onReceiveCoordinates([x,y]);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}
