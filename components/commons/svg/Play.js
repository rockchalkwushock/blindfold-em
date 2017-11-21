import PropTypes from 'prop-types'

import { styles } from '../../../lib'

const Play = ({ fn }) => (
  <g>
    <polygon className="play" onClick={fn} points="37 40, 37 80, 70 60" />
    <style jsx>{`
      .play {
        fill: ${styles.colors.highLight};
      }
    `}</style>
  </g>
)

Play.propTypes = {
  fn: PropTypes.func.isRequired
}

export default Play
