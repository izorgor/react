import React, { Component } from 'react';

class Popup extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputs: [],
      variations: []
    };
  }

  appendInput () {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState({inputs: [...this.state.inputs, newInput]});
  }

  handleWebsiteName = (name) => {
    this.setState({websiteName: name.target.value});
  };

  handleChange = (name, e) => {
    const variations = this.state.variations;
    variations[name] = e.target.value;

    this.setState({variations});
  };

  render () {

    return (
      <div className="modal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.props.closePopup}><span aria-hidden="true">×</span></button>
              <h4 className="modal-title" id="myModalLabel">{this.props.headline}</h4>
            </div>
            <div className="modal-body">
              <div className="form-group m-2">
                <label>Website Name: </label>
                <input onChange={(e) => this.handleWebsiteName(e)} name="websiteName" type="text" className="form-control popupName"/>
              </div>
              <div className="clearfix"></div>
              <div className="form-group m-2">
                <button onClick={() => this.appendInput()} className="btn">Add Variation</button>
              </div>
              <div className="clearfix"></div>
              {this.state.inputs.map((input, i) => (
                <div key={i} className="form-group m-2">
                  <label>Variation Name</label>
                  <br className="clearfix"/>
                  <input onChange={(e) => this.handleChange(i, e)} value={this.state.i} type="text" key={i}/>
                </div>
              ))}

            </div>
            <div className="modal-footer">
              <button onClick={() => {
                this.props.handleAddTemplate(this.state);
                this.props.closePopup;
              }} className="btn">ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
