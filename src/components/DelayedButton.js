import React from 'react'

export default class DelayedButton extends React.Component {
  doSomethingLater = e => {
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return (
      <button
        style={{
          height: "500px",
          width: "500px",
          border: "3px solid",
          backgroundColor: "lightblue"
        }}
        onClick={this.doSomethingLater}
      >
        Delayed...
      </button>
    )
  }
}
