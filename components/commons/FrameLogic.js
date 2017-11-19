import PropTypes from 'prop-types'

import Frame from './Frame'

const FrameLogic = ({ errors, form, next, onChange }) => {
  const { activity, cooldown, currentFrame, timer } = form
  if (currentFrame === 1) {
    return (
      <Frame
        name="activity"
        error={errors.activity}
        fn={onChange}
        next={next}
        msg="Avoiding work"
        text="What activity are you working on?"
        value={activity}
      />
    )
  } else if (currentFrame === 2) {
    return (
      <Frame
        name="timer"
        error={errors.timer}
        fn={onChange}
        next={next}
        msg="60 - units are in minutes"
        text="How long should the timer be?"
        value={timer}
      />
    )
  } else if (currentFrame === 3) {
    return (
      <Frame
        name="cooldown"
        error={errors.cooldown}
        fn={onChange}
        next={next}
        msg="10 - units are in minutes"
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
