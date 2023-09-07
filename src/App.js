import React, { Component } from 'react'



export default class App extends Component {

  state = {
    count: 0
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    //before mount event (before rendaring)
    //Data featching stage 
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

  }

  componentWillUpdate() {
    console.log('componentWillUpdate');

  }

  componentDidUpdate() {
    console.log('componentDidUpdate');

  }

  constructor() {
    super();
    console.log('constructor');
  }

  addNumber = () => {
    console.log('state change');
    this.setState({
      count: this.state.count + 1,
    });
  }


  render() {
    console.log('render')
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <p style={{ color: 'red', fontSize: '30px' }}>{this.state.count}</p>
          <button onClick={this.addNumber} style={{ fontSize: '20px' }}>Add Number</button>
        </div>
      </div>
    )
  }
}
