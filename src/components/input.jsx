import React, { Component } from 'react';

class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {
      disabled: true,
      active: false
    };
  }

  handleCheckbox (e) {
    if (e.target.checked !== true) {
      this.setState({disabled: true, active: false});
    } else {
      this.setState({disabled: false, active: true});
    }
  }

  render () {
    const {labelName, templateName, onChange, inputId} = this.props;
    let disabled = true;
    return (
      <React.Fragment>
        <div className="form-group m-2">
          <label htmlFor="usr">{labelName}</label>
          <input onChange={(e) => onChange(e, {template: templateName, layout: labelName, active: this.state.active})} type="number" className="form-control" name={templateName + labelName}
                 disabled={this.state.disabled}/>
          <label className="switch">
            <input onChange={(e) => this.handleCheckbox(e)} type="checkbox" name={labelName + templateName}/>
            <span className="slider round"></span>
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;


