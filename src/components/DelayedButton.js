// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{

  handleOnClick =(e)=> {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  }

  render(){
    return(
      <div>
      <button onClick={this.handleOnClick}>
      Press me again
      </button>
      </div>
    )
  }
}

export default DelayedButton
