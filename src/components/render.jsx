import React, { Component } from 'react';
import Block from './block';
import SaveButton from './saveButton';

class Render extends Component {
  loadData () {
    fetch('https://api.myjson.com/bins/6dr38')
      .then(response => response.json())
      .then(data => {
        this.setState({data: data});
        this.setState({config: this.test()});
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

  test () {

    var config = {
      'de-20minuten.ch': [
        {
          name: 'blueButton',
          active: true,
          probability: 1
        },
        {
          name: 'default',
          active: true,
          probability: 1
        }
      ]
    };
    return config;
  }

  render () {
    console.log(this.state);
    const {data} = this.state;

    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <tbody>
          {data && data.templates.map((template, i) => (
            <Block key={i} template={template.name} variations={template.layouts}/>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Render;


