import PropTypes from 'prop-types'

import Frame from './Frame'

const FrameLogic = ({ errors, form, next, onChange }) => {
  const { activity, cooldown, currentFrame, timer } = form
  if (currentFrame === 1) {
    return (
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
    return (
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
    return (
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
}

FrameLogic.propTypes = {
  errors: PropTypes.object,
  form: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default FrameLogic
