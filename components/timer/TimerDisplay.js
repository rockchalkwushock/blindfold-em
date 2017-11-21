/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types'

import { Circle, Play, Stop, Svg, Text } from '../svg'

/**
 * @function TimerDisplay
 * @description renders animated <svg /> conditional to timer state.
 *
 * @prop {Number} duration
 * @prop {Function} start
 * @prop {String} state
 * @prop {Function} stop
 * @prop {String} time
 * @returns React Element
 */
const TimerDisplay = ({ duration, start, state, stop, time }) => {
  const animationState =
    state === 'timer'
      ? 'timerAnimation'
      : state === 'cooldown' ? 'cooldownAnimation' : null
  if (state) {
    return (
      <Svg>
        <Circle className="outer" />
        <Circle className={`overlay ${animationState}`} duration={duration} />
        <Text time={time} />
        <Stop fn={stop} />
      </Svg>
    )
  }
  return (
    <Svg>
      <Circle className="outer" />
      <Play fn={start} />
    </Svg>
  )
}

TimerDisplay.propTypes = {
  duration: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  state: PropTypes.string,
  stop: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired
}

export default TimerDisplay
