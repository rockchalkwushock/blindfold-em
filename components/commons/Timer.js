/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types'

// import Display from './Display'
import FlexContainer from './FlexContainer'
import TimerControls from './TimerControls'
import TimerSVG from './TimerSVG'

import { format } from '../../lib'
/* FIXME: `state` is terrible find a better way */
const Timer = ({ cooldown, form, start, stop, timer }) => (
  <FlexContainer className="timer">
    <TimerSVG
      activity={form.activity}
      duration={timer.id ? timer.duration : cooldown.duration}
      state={timer.status ? 'timer' : cooldown.status ? 'cooldown' : null}
      time={timer.id ? format(timer.current) : format(cooldown.current)}
    />
    <TimerControls start={start} stop={stop} />
  </FlexContainer>
)
Timer.propTypes = {
  cooldown: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  timer: PropTypes.object.isRequired
}

export default Timer

/**
 * <Display
        activity={form.activity}
        baseCool={format(cooldown.base)}
        baseTime={format(timer.base)}
        condition={cooldown.id}
        currCool={format(cooldown.current)}
        currTime={format(timer.current)}
      />
 */
