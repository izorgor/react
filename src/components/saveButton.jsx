import React, { Component } from 'react';
import axios from 'axios';

class SaveButton extends Component {
  constructor (props) {
    super(props);
    this.saveButton = document.getElementById('saveButton');
    this.state = {
      text: ''
    };
  }

  handleSaveButton = configData => {
    this.setState({text: ''});
    axios.post('http://localhost:3001/configUploader', {
      configData
    })
      .then(data => {
        console.log('success!');
        this.setState({text: 'DONE!'});
        this.handleInfo();
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInfo () {
    setTimeout(() => {
      this.setState({text: ''});
    }, 2000);
  }

  render () {
    const {data} = this.props;
    console.log(this.state);
    return (
      <React.Fragment>
        <button id="saveButton" onClick={() => this.handleSaveButton(data)} className="btn btn-dark">SAVE</button>
        <br/>
        <span>{this.state.text}</span>
      </React.Fragment>
    );
  }
}

export default SaveButton;
