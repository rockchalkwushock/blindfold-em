/* eslint-disable no-nested-ternary */
import { Component } from 'react'
import moment from 'moment'

import { Completed, FlexContainer, FrameLogic, Timer } from '../components'
import { validate, timerState as t } from '../lib'

class WizardTimer extends Component {
  state = {
    completed: false,
    cooldown: {
      base: null,
      current: null,
      duration: null,
      id: null,
      status: t.STOPPED
    },
    errors: {
      activity: '',
      cooldown: '',
      timer: ''
    },
    form: {
      activity: '',
      cooldown: '',
      currentFrame: 1,
      timer: ''
    },
    timer: {
      base: null,
      current: null,
      duration: null,
      id: null,
      status: t.STOPPED
    }
  }
  _next = e => {
    e.preventDefault()
    if (this.validateFrame()) {
      let frame = this.state.form.currentFrame
      this.setState({
        form: {
          ...this.state.form,
          currentFrame: ++frame
        }
      })
    }
  }
  handleOnChange = e => {
    const val = e.target.value
    const key = e.target.name
    if (key === 'timer') {
      this.setState({
        form: {
          ...this.state.form,
          [key]: val
        },
        timer: {
          ...this.state.timer,
          base: moment.duration(parseInt(val, 10), 'minutes'),
          current: moment.duration(parseInt(val, 10), 'minutes'),
          duration: moment.duration(parseInt(val, 10), 'minutes').as('seconds')
        }
      })
    } else if (key === 'cooldown') {
      this.setState({
        cooldown: {
          ...this.state.cooldown,
          base: moment.duration(parseInt(val, 10), 'minutes'),
          current: moment.duration(parseInt(val, 10), 'minutes'),
          duration: moment.duration(parseInt(val, 10), 'minutes').as('seconds')
        },
        form: {
          ...this.state.form,
          [key]: val
        }
      })
    }
    this.setState({
      form: {
        ...this.state.form,
        [key]: val
      }
    })
  }
  reduceTime = () => {
    const { cooldown, timer } = this.state
    if (timer.id) {
      if (
        timer.current.get('hours') === 0 &&
        timer.current.get('minutes') === 0 &&
        timer.current.get('seconds') === 0
      ) {
        clearInterval(timer.id)
        this.setState({
          cooldown: {
            ...this.state.cooldown,
            id: setInterval(this.reduceTime, 1000),
            status: t.START
          },
          timer: {
            ...this.state.timer,
            current: moment.duration(timer.base),
            id: null,
            status: t.STOPPED
          }
        })
        return
      }

      this.setState({
        timer: {
          ...this.state.timer,
          current: moment.duration(timer.current).subtract(1, 'second')
        }
      })
    }
    if (cooldown.id) {
      if (
        cooldown.current.get('hours') === 0 &&
        cooldown.current.get('minutes') === 0 &&
        cooldown.current.get('seconds') === 0
      ) {
        clearInterval(cooldown.id)
        this.setState({
          completed: true,
          cooldown: {
            ...this.state.cooldown,
            id: null,
            status: t.STOPPED
          }
        })
        return
      }

      const current = moment.duration(cooldown.current)
      current.subtract(1, 'second')
      this.setState({
        cooldown: {
          ...this.state.cooldown,
          current
        }
      })
    }
  }
  reset = () => {
    this.setState({
      completed: false,
      cooldown: {
        ...this.state.cooldown,
        base: null,
        current: null
      },
      form: {
        ...this.state.form,
        activity: '',
        cooldown: '',
        currentFrame: 1,
        timer: ''
      },
      timer: {
        ...this.state.timer,
        base: null,
        current: null
      }
    })
  }
  start = () => {
    this.setState({
      timer: {
        ...this.state.timer,
        id: setInterval(this.reduceTime, 1000),
        status: t.START
      }
    })
  }
  stop = () => {
    const { cooldown, timer } = this.state
    if (timer.id) {
      clearInterval(timer.id)
      this.setState({
        timer: {
          ...this.state.timer,
          current: moment.duration(timer.base),
          id: null,
          status: t.STOPPED
        }
      })
    }
    if (cooldown.id) {
      clearInterval(cooldown.id)
      this.setState({
        cooldown: {
          ...this.state.cooldown,
          current: moment.duration(cooldown.base),
          id: null,
          status: t.STOPPED
        }
      })
    }
  }
  validateFrame = () => {
    const errors = validate(this.state)
    const isValid = !Object.keys(errors).some(key => errors[key])
    if (!isValid) {
      this.setState({
        errors: {
          activity: errors.activity ? errors.activity : '',
          cooldown: errors.cooldown ? errors.cooldown : '',
          timer: errors.timer ? errors.timer : ''
        }
      })
      return isValid
    }
    return isValid
  }
  renderCompleted = () => (
    <Completed activity={this.state.form.activity} fn={this.reset} />
  )
  renderFrames = () => (
    <FrameLogic
      errors={this.state.errors}
      form={this.state.form}
      next={this._next}
      onChange={this.handleOnChange}
    />
  )
  renderTimer = () => (
    <Timer {...this.state} start={this.start} stop={this.stop} />
  )
  render() {
    const { completed, form: { currentFrame } } = this.state
    return (
      <FlexContainer className="wizard">
        {currentFrame !== 4
          ? this.renderFrames()
          : !completed ? this.renderTimer() : this.renderCompleted()}
      </FlexContainer>
    )
  }
}

export default WizardTimer