import React, { Component } from 'react'



export default class App extends Component {
  constructor() {
    super();
    console.log('constructor');
  }
  render() {
    console.log('work')
    return (
      <div>App</div>
    )
  }
}
