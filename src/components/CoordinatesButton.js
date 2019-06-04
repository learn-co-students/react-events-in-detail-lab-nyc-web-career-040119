import React from 'react'

export default class CoordinatesButton extends React.Component {
  logCoords = e => {
    this.props.onReceiveCoordinates(
      [e.clientX, e.clientY]
    )
  }

  render() {
    return (
      <button
        style={{
          height: "500px",
          width: "500px",
          border: "3px solid",
          backgroundColor: "lightpink"
        }}
        onClick={this.logCoords}
      >
        NOW!
      </button>
    )
  }
}
