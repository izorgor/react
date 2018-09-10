import React, { Component } from 'react';
import Input from './input';

class Block extends Component {
  constructor (props) {
    super();
    this.state = {};
  }



  render () {
    const {template, variations, onChange} = this.props;

    return (
      <React.Fragment>
        <tr className="post-table">
          <td><h2 className="templateName">{template}</h2></td>
          <td>
            {variations.map((variation, i) => (
              <Input key={i} labelName={variation} templateName={template} onChange={onChange} />
            ))}
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Block;


