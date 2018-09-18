import React, { Component } from 'react';

class Variation extends Component {
  constructor (props) {
    super(props);
    this.state = {
      disabled: !this.props.active,
      active: this.props.active
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
    const {labelName, templateName, onChange, initValue, onVarDelete} = this.props;

    return (
      <React.Fragment>
        <div className="form-group m-2">
          <label htmlFor="usr">{labelName}</label>
          <span className="valuePadding">
                <input value={initValue} onChange={(e) => onChange(e, {template: templateName, layout: labelName, active: this.state.active})} type="number" className="form-control"
                       name={templateName + labelName}
                       disabled={this.state.disabled}/>
          </span>
          <label className="switch">
            <input checked={this.state.active} onChange={(e) => this.handleCheckbox(e)} type="checkbox"/>
            <span className="slider round"></span>
          </label>
          <button type="button" className="close m-2" aria-label="Close" onClick={() => this.props.onVarDelete({tempName: templateName, varName: labelName})}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Variation;


