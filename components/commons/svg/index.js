/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types'

import Circle from './Circle'
import Play from './Play'
import Stop from './Stop'
import Svg from './Svg'
import Text from './Text'

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

/**
 * 1. Initial view is just play icon.
 * 2. onClick transition to view of time and animated timer.
 * 3. if (state) <AnimatedTimer />
 * 4. if (!state) <Play />
 */
