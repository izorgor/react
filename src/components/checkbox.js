import React, { Component } from 'react';

class Checkbox extends Component {

  render () {
    const {labelName, templateName, onChange, inputId} = this.props;
    return (
      <React.Fragment>
        <label className="switch">
          <input onChange={(e) => console.log(e.target.checked)} type="checkbox" name={labelName + templateName}/>
          <span className="slider round"></span>
        </label>
      </React.Fragment>
    );
  }
}

export default Input;


