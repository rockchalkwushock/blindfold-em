/* eslint-disable no-nested-ternary */
import { Component } from 'react'
import moment from 'moment'

import { Completed, FlexContainer, Frames, Timer } from '../components'
import { validate, timerState as t } from '../lib'

/**
 * @class WizardTimer
 * @description State container for management of Wizard Form & Timer.
 *
 * @extends React.Component
 *
 * @method _next
 * @method handleOnChange
 * @method reduceTime
 * @method reset
 * @method start
 * @method stop
 * @method validateFrame
 * @method renderCompleted
 * @method renderFrames
 * @method renderTimer
 * @method render
 *
 * @returns React Element
 *
 */
class WizardTimer extends Component {
  state = {
    alarm: null,
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
  componentDidMount() {
    // NOTE: Because of default SSR must instantiate this
    // here because it is `window.Audio`
    const alarm = new Audio(
      'https://res.cloudinary.com/rockchalkwushock/video/upload/v1511354646/doorbell.mp3'
    )
    this.setState(state => ({ ...state, alarm }))
  }
  /**
   * @method _next
   * @description responsible for the advancement of the form.
   * @setState currentFrame
   */
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
  /**
   * @method handleOnChange
   * @description responsible for getting user input and storing in state.
   * @setState
   *    cooldown{base|current|duration}
   *    form{activity|cooldown|timer}
   *    timer{base|current|duration}
   */
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
  /**
   * @method reduceTime
   * @description responsible for reducing timer & updating state.
   * @setState
   *    completed
   *    cooldown{current|id|status}
   *    timer{current|id|status}
   */
  reduceTime = () => {
    const { cooldown, timer } = this.state
    if (timer.id) {
      if (
        timer.current.get('hours') === 0 &&
        timer.current.get('minutes') === 0 &&
        timer.current.get('seconds') === 0
      ) {
        this.state.alarm.play()
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
        this.state.alarm.play()
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

      this.setState({
        cooldown: {
          ...this.state.cooldown,
          current: moment.duration(cooldown.current).subtract(1, 'second')
        }
      })
    }
  }
  /**
   * @method reset
   * @description responsible for resetting state of WizardTimer.
   * @setState initialState values
   */
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
  /**
   * @method start
   * @description responsible for starting timer
   * @setState timer{id|status}
   */
  start = () => {
    this.setState({
      timer: {
        ...this.state.timer,
        id: setInterval(this.reduceTime, 1000),
        status: t.START
      }
    })
  }
  /**
   * @method stop
   * @description responsible for stopping the timer/cooldown
   * & returning to starting state of timer.
   * @setState
   *    cooldown{current|id|status}
   *    timer{current|id|status}
   */
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
  /**
   * @method validateFrame
   * @description responsible for running validation on user input
   * @setState errors{activity|cooldown|timer}
   */
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
  /**
   * @method renderCompleted
   * @description responsible for rendering completed view.
   */
  renderCompleted = () => (
    <Completed activity={this.state.form.activity} fn={this.reset} />
  )
  /**
   * @method renderFrames
   * @description responsible for rendering form view(s).
   */
  renderFrames = () => (
    <Frames
      errors={this.state.errors}
      form={this.state.form}
      next={this._next}
      onChange={this.handleOnChange}
    />
  )
  /**
   * @method renderTimer
   * @description responsible for rendering timer view.
   */
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
