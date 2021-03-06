import PropTypes from 'prop-types'

import Frame from './Frame'
import { Form } from '../commons'

/**
 * @function Frames
 * @description renders <form /> conditional to state of Wizard.
 *
 * @prop {Object} errors
 * @prop {Object} forms
 * @prop {Function} next
 * @prop {Function} onChange
 * @returns React Element
 */
const Frames = ({ errors, form, next, onChange }) => {
  let frame
  const { activity, cooldown, currentFrame, timer } = form
  if (currentFrame === 1) {
    frame = (
      <Frame
        error={errors.activity}
        fn={onChange}
        msg="Avoiding work"
        name="activity"
        next={next}
        text="What activity are you working on?"
        value={activity}
      />
    )
  } else if (currentFrame === 2) {
    frame = (
      <Frame
        error={errors.timer}
        fn={onChange}
        msg="60 - units are in minutes"
        name="timer"
        next={next}
        text="How long should the timer be?"
        value={timer}
      />
    )
  } else if (currentFrame === 3) {
    frame = (
      <Frame
        error={errors.cooldown}
        fn={onChange}
        msg="10 - units are in minutes"
        name="cooldown"
        next={next}
        text="How long should the cooldown be?"
        value={cooldown}
      />
    )
  }
  return <Form>{frame}</Form>
}

Frames.propTypes = {
  errors: PropTypes.object,
  form: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Frames
