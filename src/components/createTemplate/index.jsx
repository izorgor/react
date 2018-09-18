import React, { Component } from 'react';
import Popup from './popup';
import UploadButton from './uploadIcon.svg';

class AddBlock extends Component {

  constructor () {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render () {
    return (
      <React.Fragment>
        <button onClick={this.togglePopup} id="addBlock" className="btn"><span><img src={UploadButton} alt=""/></span>Add Website</button>
        {this.state.showPopup ? <Popup handleAddTemplate={this.props.handleAddTemplate} headline='Add New Website' closePopup={this.togglePopup}/> : null}
      </React.Fragment>
    );
  }
}

export default AddBlock;
