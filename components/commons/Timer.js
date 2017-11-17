import PropTypes from 'prop-types'

import Display from './Display'
import FlexContainer from './FlexContainer'
import TimerControls from './TimerControls'

import { format } from '../../lib'

const Timer = ({ cooldown, form, start, stop, timer }) => (
  <FlexContainer className="timer">
    <Display
      activity={form.activity}
      baseCool={format(cooldown.base)}
      baseTime={format(timer.base)}
      condition={cooldown.id}
      currCool={format(cooldown.current)}
      currTime={format(timer.current)}
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
