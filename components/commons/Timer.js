/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types'

import FlexContainer from './FlexContainer'
import TimerDisplay from './svg'
import { format } from '../../lib'

/* FIXME: `state` is terrible find a better way */
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
