import { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import { Button } from '../components'

/**
 * REVIEW
 *
 * 1. Button logic needs to be fixed.
 * 2. Need to handle ending logic of cooldown timer.
 * 3. Need to update all tests
 *  - this will suck since I renamed state values.
 */

export const t = {
  STOPPED: 0,
  START: 1
}

class Timer extends Component {
  static propTypes = {
    activity: PropTypes.string.isRequired,
    cooldown: PropTypes.string.isRequired,
    timer: PropTypes.string.isRequired
  }
  state = {
    baseCooldown: moment.duration(parseInt(this.props.cooldown, 10), 'minutes'),
    baseTime: moment.duration(parseInt(this.props.timer, 10), 'minutes'),
    cooldownId: null,
    currentTime: moment.duration(parseInt(this.props.timer, 10), 'minutes'),
    currentCooldown: moment.duration(
      parseInt(this.props.cooldown, 10),
      'minutes'
    ),
    timerId: null,
    cooldownState: t.STOPPED,
    timerState: t.STOPPED
  }
  reduceTime = () => {
    if (this.state.timerId) {
      if (
        this.state.currentTime.get('hours') === 0 &&
        this.state.currentTime.get('minutes') === 0 &&
        this.state.currentTime.get('seconds') === 0
      ) {
        clearInterval(this.state.timerId)
        this.setState(state => ({
          ...state,
          cooldownId: setInterval(this.reduceTime, 1000),
          cooldownState: t.START,
          timerId: null,
          timerState: t.STOPPED
        }))
        return
      }

      const currentTime = moment.duration(this.state.currentTime)
      currentTime.subtract(1, 'second')

      this.setState(state => ({ ...state, currentTime }))
    }
    if (this.state.cooldownId) {
      if (
        this.state.currentCooldown.get('hours') === 0 &&
        this.state.currentCooldown.get('minutes') === 0 &&
        this.state.currentCooldown.get('seconds') === 0
      ) {
        clearInterval(this.state.cooldownId)
        this.setState(state => ({
          ...state,
          cooldownId: null,
          cooldownState: t.STOPPED,
          timerId: null,
          timerState: t.STOPPED
        }))
        return
      }

      const currentCooldown = moment.duration(this.state.currentCooldown)
      currentCooldown.subtract(1, 'second')

      this.setState(state => ({ ...state, currentCooldown }))
    }
  }
  start = () => {
    this.setState(state => ({
      ...state,
      timerId: setInterval(this.reduceTime, 1000),
      timerState: t.START
    }))
  }
  stop = () => {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)
      this.setState(state => ({
        ...state,
        timerId: null,
        timerState: t.STOPPED
      }))
    }
    if (this.state.cooldownId) {
      clearInterval(this.state.cooldownId)
      this.setState(state => ({
        ...state,
        cooldownId: null,
        cooldownState: t.STOPPED
      }))
    }
  }
  render() {
    const { activity } = this.props
    const { baseCooldown, baseTime, currentCooldown, currentTime } = this.state
    const baseTimer = `Selected Timer: ${baseTime.get(
      'minutes'
    )}:${baseTime.get('seconds')}`
    const currentTimer = `Current Time: ${currentTime.get(
      'minutes'
    )}:${currentTime.get('seconds')}`
    const baseCool = `Selected Cooldown: ${baseCooldown.get(
      'minutes'
    )}:${baseCooldown.get('seconds')}`
    const currentCool = `Current Cooldown: ${currentCooldown.get(
      'minutes'
    )}:${currentCooldown.get('seconds')}`
    return (
      <div>
        <h1>{activity}</h1>
        <h2>{baseTimer}</h2>
        <h2>{currentTimer}</h2>
        <h2>{baseCool}</h2>
        <h2>{currentCool}</h2>
        <Button
          className="start"
          condition={
            this.state.cooldownState === 1 || this.state.timerState === 1
          }
          fn={this.start}
          text="Start"
        />
        <Button className="stop" condition={false} fn={this.stop} text="Stop" />
      </div>
    )
  }
}

export default Timer
