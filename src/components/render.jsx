import React, { Component } from 'react';
import Block from './block';
import SaveButton from './saveButton';

class Render extends Component {
  loadData () {
    fetch('https://api.myjson.com/bins/6dr38')
      .then(response => response.json())
      .then(data => {
        this.setState({data: data});
        this.setState({config: this.handleInitialConfigState()});
      })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  constructor (props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount () {
    this.loadData();
  }

  handleInitialConfigState () {
    var config = {};
    {
      this.state.data && this.state.data.templates.map((template, i) => {
        config[template.name] = [];

        {
          template.layouts.map((t, i) => {
            config[template.name][i] = {
              name: t,
              active: false,
              probability: 0
            };
          });
        }

      });
    }
    return config;
  }

  handleChange = (e, inputConf) => {
    const template = inputConf.template;
    const layout = inputConf.layout;
    const active = inputConf.active;

    let config = this.state.config;

    config[template].filter(c => c.name === layout)[0].probability = e.target.value;
    config[template].filter(c => c.name === layout)[0].active = active;

    this.setState({config});
  };

  render () {

    const {data, config} = this.state;

    return (
      <React.Fragment>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
            {data && data.templates.map((template, i) => (
              <Block key={i} template={template.name} variations={template.layouts} onChange={this.handleChange}/>
            ))}
            </tbody>
          </table>
        </div>
        {config && <SaveButton config={config}/>}
      </React.Fragment>
    );
  }
}

export default Render;


