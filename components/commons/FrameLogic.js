import PropTypes from 'prop-types'

import Frame from './Frame'

const FrameLogic = ({ form, next, onChange, prev }) => {
  const { activity, cooldown, currentFrame, timer } = form
  if (currentFrame === 1) {
    return (
      <Frame
        name="activity"
        fn={onChange}
        next={next}
        text="What activity are you working on?"
        value={activity}
      />
    )
  } else if (currentFrame === 2) {
    return (
      <Frame
        name="timer"
        fn={onChange}
        next={next}
        prev={prev}
        text="How long should the timer be?"
        value={timer}
      />
    )
  } else if (currentFrame === 3) {
    return (
      <Frame
        name="cooldown"
        fn={onChange}
        next={next}
        prev={prev}
        text="How long should the cooldown be?"
        value={cooldown}
      />
    )
  }
}

FrameLogic.propTypes = {
  form: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired
}

export default FrameLogic
