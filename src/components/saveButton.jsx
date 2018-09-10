import React, { Component } from 'react';
import axios from 'axios';

class SaveButton extends Component {

  handleLoader (html) {
    const save = document.getElementById('saveButton');
    save.innerHTML = html;
  }

  handleSaveButton = configData => {

    const loader = '<div className="lds-ripple"><div></div><div></div></div>';

    console.log(loader);

    this.handleLoader(loader);

    axios.post('http://localhost:3001/configUploader', {
      configData
    })
      .then(data => {
        console.log('success!');
        console.log(data);
        this.handleLoader('DONE');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render () {
    return (
      <div>
        <button id="saveButton" onClick={() => this.handleSaveButton(this.props.config)} className="btn btn-dark">SAVE</button>
      </div>
    );
  }
}

export default SaveButton;
