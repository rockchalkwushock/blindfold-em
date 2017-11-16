import PropTypes from 'prop-types'

import Button from './Button'
import Fragment from './Fragment'

const TimerControls = ({ start, stop }) => (
  <Fragment>
    <Button className="start" fn={start} text="Start" />
    <Button className="stop" fn={stop} text="Stop" />
  </Fragment>
)

TimerControls.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired
}

export default TimerControls
