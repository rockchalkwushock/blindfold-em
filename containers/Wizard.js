import { Component } from 'react'

import { Button, Frame } from '../components'
import Timer from './Timer'

class Wizard extends Component {
  state = {
    activity: '',
    cooldown: '',
    currentFrame: 1,
    timer: ''
  }
  _next = () => {
    let frame = this.state.currentFrame
    this.setState(state => ({ ...state, currentFrame: ++frame }))
  }
  _prev = () => {
    let frame = this.state.currentFrame
    this.setState(state => ({ ...state, currentFrame: --frame }))
  }
  handleOnChange = e => {
    const val = e.target.value
    const key = e.target.name
    this.setState(state => ({
      ...state,
      [key]: val
    }))
  }
  renderFrame = () => {
    const { activity, cooldown, currentFrame, timer } = this.state
    if (currentFrame === 1) {
      return (
        <Frame
          name="activity"
          fn={this.handleOnChange}
          text="What activity are you working on?"
          value={activity}
        />
      )
    } else if (currentFrame === 2) {
      return (
        <Frame
          name="timer"
          fn={this.handleOnChange}
          text="How long should the timer be?"
          value={timer}
        />
      )
    } else if (currentFrame === 3) {
      return (
        <Frame
          name="cooldown"
          fn={this.handleOnChange}
          text="How long should the cooldown be?"
          value={cooldown}
        />
      )
    }
  }
  renderTimer = () => (
    <Timer
      activity={this.state.activity}
      cooldown={this.state.cooldown}
      timer={this.state.timer}
    />
  )
  render() {
    const { currentFrame } = this.state
    const view = currentFrame !== 4 ? this.renderFrame() : this.renderTimer()
    return (
      <div>
        {view}
        <Button
          className="next"
          condition={currentFrame === 4}
          fn={this._next}
          text="Next"
        />
        <Button
          className="prev"
          condition={currentFrame === 1}
          fn={this._prev}
          text="Prev"
        />
      </div>
    )
  }
}

export default Wizard
