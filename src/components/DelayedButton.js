// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{

  coo = (event) => {
    event.persist();
    setTimeout(() =>{
    this.props.onDelayedClick(event)
  }, this.props.delay);
};

  render(){
    return(
      <div>
        <button onClick={this.coo}>

        </button>
      </div>
    )
  }
}

export default DelayedButton
