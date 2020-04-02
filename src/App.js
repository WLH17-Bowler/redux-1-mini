import React, {Component} from 'react';
import './App.css';
import Counter from './Counter';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Counter />
      </div>
    )      
  }
}