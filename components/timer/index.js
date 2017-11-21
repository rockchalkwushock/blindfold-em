/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types'

import TimerDisplay from './TimerDisplay'
import { FlexContainer } from '../commons'

import { format } from '../../lib'

/* FIXME: `state` is terrible find a better way */

/**
 * @function Timer
 * @description renders the application timer
 * @prop {Object} cooldown
 * @prop {Function} start
 * @prop {Function} stop
 * @prop {Object} timer
 * @returns React Element
 */
const Timer = ({ cooldown, start, stop, timer }) => (
  <FlexContainer className="timer">
    <TimerDisplay
      duration={timer.id ? timer.duration : cooldown.duration}
      start={start}
      state={timer.status ? 'timer' : cooldown.status ? 'cooldown' : null}
      stop={stop}
      time={timer.id ? format(timer.current) : format(cooldown.current)}
    />
  </FlexContainer>
)
Timer.propTypes = {
  cooldown: PropTypes.object.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  timer: PropTypes.object.isRequired
}

export default Timer
