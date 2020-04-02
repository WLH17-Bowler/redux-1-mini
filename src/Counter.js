import React, {Component} from 'react'
import {RESET, INCREMENT, DECREMENT, UNDO, REDO} from './store'
import store from './store'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: store.getState()
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({store: store.getState()})
    })
  }
  reset = () => {
    store.dispatch({type: RESET})
  }
  increment = (amount) => {
    store.dispatch({amount, type: INCREMENT})
  }
  decrement = (amount) => {
    store.dispatch({amount, type: DECREMENT})
  }
  undo = () => {
    store.dispatch({type: UNDO})
  }
  redo = () => {
    store.dispatch({type: REDO})
  }
  render() {
    const {currentValue, futureValues, previousValues} = this.state.store
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button className="counter__button increment-one" onClick={() => this.increment(1)} > +1 </button>
            <button className="counter__button increment-five" onClick={() => this.increment(5)} > +5 </button>
            <button className="counter__button decrement-one" onClick={() => this.decrement(1)} > -1 </button>
            <button className="counter__button decrement-five" onClick={() => this.decrement(5)} > -5 </button>
            <br />
            <button className="counter__button undo" disabled={previousValues.length === 0} onClick={this.undo} > Undo </button>
            <button className="counter__button redo" disabled={futureValues.length === 0} onClick={this.redo} > Redo </button>
            <div>
              <button className='counter_button reset' onClick={this.reset} > Reset </button>
            </div>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </section>
      </div>
    )
  }
}