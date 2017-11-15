import { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import { Button } from '../components'

export const t = {
  STOPPED: 0,
  START: 1,
  PAUSED: 2
}

class Timer extends Component {
  static propTypes = {
    activity: PropTypes.string.isRequired,
    cooldown: PropTypes.string.isRequired,
    timer: PropTypes.string.isRequired
  }
  state = {
    baseTime: moment.duration(parseInt(this.props.timer, 10), 'minutes'),
    currentTime: moment.duration(parseInt(this.props.timer, 10), 'minutes'),
    cooldown: moment.duration(parseInt(this.props.cooldown, 10), 'minutes'),
    pomodoro: null,
    pomodoroState: t.STOPPED
  }
  pause = () => console.log('pause')
  reduceTime = () => {
    const currentTime = moment.duration(this.state.currentTime)
    currentTime.subtract(1, 'second')

    this.setState(state => ({ ...state, currentTime }))
  }
  start = () => {
    this.setState(state => ({
      ...state,
      pomodoro: setInterval(this.reduceTime, 1000),
      pomodoroState: t.START
    }))
  }
  stop = () => {
    if (this.state.pomodoro) {
      clearInterval(this.state.pomodoro)
    }

    this.setState(state => ({
      ...state,
      currentTime: moment.duration(this.state.baseTime),
      pomodoro: null,
      pomodoroState: t.STOPPED
    }))
  }
  render() {
    const { activity } = this.props
    const { baseTime, cooldown, currentTime } = this.state
    const base = `Selected Timer: ${baseTime.get('minutes')}:${baseTime.get(
      'seconds'
    )}`
    const current = `Current Time: ${currentTime.get(
      'minutes'
    )}:${currentTime.get('seconds')}`
    const cool = `Selected Cooldown: ${cooldown.get('minutes')}:${cooldown.get(
      'seconds'
    )}`
    return (
      <div>
        <h1>{activity}</h1>
        <h2>{base}</h2>
        <h2>{current}</h2>
        <h2>{cool}</h2>
        <Button
          className="start"
          condition={this.state.pomodoroState === 1}
          fn={this.start}
          text="Start"
        />
        <Button
          className="pause"
          condition={this.state.pomodoroState === 2}
          fn={this.pause}
          text="Pause"
        />
        <Button
          className="stop"
          condition={this.state.pomodoroState === 0}
          fn={this.stop}
          text="Stop"
        />
      </div>
    )
  }
}

export default Timer
