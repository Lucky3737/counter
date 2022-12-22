// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(preState => {
      console.log(`pre state ${preState.count}`)
      return {count: preState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">
            The Button has clicked <span className="count">{count}</span> times
          </h1>
          <p className="p">click here to increase the count</p>
          <div>
            <button className="btn" type="submit" onClick={this.onIncrement}>
              Click me
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
