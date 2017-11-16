import Button from './Button'
import { Fragment } from '../../lib'

const TimerControls = ({ start, stop }) => (
  <Fragment>
    <Button className="start" fn={start} text="Start" />
    <Button className="stop" fn={stop} text="Stop" />
  </Fragment>
)

export default TimerControls
