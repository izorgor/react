import React, { Component } from 'react';

class SaveButton extends Component {

  constructor (props) {
    super(props);
    this.state = {input: ''};
  }


  render () {
    return (
      <div>
        <button className="btn btn-dark" >Save</button>
      </div>
    );
  }
}

export default SaveButton;
