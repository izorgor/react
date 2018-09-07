import React, { Component } from 'react';

class Input extends Component {

  render () {
    const {labelName, templateName, onChange} = this.props;

    return (
      <React.Fragment>
        <div className="form-group m-2">
          <label htmlFor="usr">{labelName}</label>
          <input onChange={() => onChange(templateName + labelName)} type="number" className="form-control" name={templateName + labelName}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;


