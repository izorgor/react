//TODO: Implement Search box
//TODO: Implement fields validation: 1. field can`t be empty if active

import React, { Component } from 'react';
import Block from './renderTemplate';
import SaveButton from './saveButton';
import Header from './header';

class Render extends Component {
  constructor (props) {
    super(props);
    this.state = {data: null};
  }

  loadData () {
    fetch('https://api.myjson.com/bins/17udec')
      .then(response => response.json())
      .then(data => {
        this.setState({data: data});
      })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  removeByKey (myObj, deleteKey) {
    return Object.keys(myObj)
      .filter(key => key !== deleteKey)
      .reduce((result, current) => {
        result[current] = myObj[current];
        return result;
      }, {});
  }

  componentDidMount () {
    this.loadData();
  }

  handleChange = (e, inputConf) => {
    let {data} = this.state;
    const {template, layout, active} = inputConf;

    data[template].filter(c => c.name === layout)[0].probability = e.target.value;
    data[template].filter(c => c.name === layout)[0].active = active;

    this.setState({data});
  };

  handleAddTemplate = (createInfo) => {
    const {websiteName, variations} = createInfo;
    const a = this.state.data;
    const newValue = variations.map(variation => (
      {
        name: variation,
        active: true,
        probability: 0
      }
    ));

    this.setState({data: {...a, [websiteName]: newValue}});
  };

  handleRemoveTemplate = (name) => {
    const template = this.removeByKey(this.state.data, name);
    this.setState({data: template});
  };

  handleRemoveVariation = (name) => {
    const template = this.state.data[name.tempName].filter(v => v.name !== name.varName);
    this.setState({data: {...this.state.data, [name.tempName]: template}});
  };

  render () {
    const {data} = this.state;
    console.log(this.state);
    return (
      <React.Fragment>
        <Header handleAddTemplate={this.handleAddTemplate}/>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
              {data && Object.keys(data).map((t, i) => (
                <Block key={i} config={data} template={t} onChange={this.handleChange} onDelete={this.handleRemoveTemplate} onVarDelete={this.handleRemoveVariation}/>
              ))}
              </tbody>
            </table>
          </div>
        </div>

        {data && <SaveButton data={data}/>}
      </React.Fragment>
    );
  }
}

export default Render;


