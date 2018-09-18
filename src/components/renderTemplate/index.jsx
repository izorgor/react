import React, { Component } from 'react';
import Variation from './variations';

class Block extends Component {

  render () {
    const {template, config, onChange} = this.props;

    return (
      <tr className="post-table">
        <td><h2 className="templateName">{template}</h2></td>
        <td>
          {config[template].map((variation, i) => (
            <React.Fragment key={i}>
              <Variation key={i} labelName={variation.name} templateName={template} onVarDelete={this.props.onVarDelete} onChange={onChange} initValue={variation.probability} active={variation.active}/>
            </React.Fragment>
          ))}
        </td>
        <td>
          <button onClick={() => this.props.onDelete(template)} className="btn btn-dark" id="deleteBlock">DELETE</button>
        </td>
      </tr>
    );
  }
}

export default Block;


