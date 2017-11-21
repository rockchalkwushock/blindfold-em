import PropTypes from 'prop-types'

import { styles } from '../../../lib'

const Text = ({ time }) => (
  <text x="25" y="65">
    {time}
    <style jsx>{`
      text {
        fill: ${styles.colors.highLight};
        font-family: ${styles.fonts.kalam};
        font-size: 1em;
      }
    `}</style>
  </text>
)

Text.propTypes = {
  time: PropTypes.string.isRequired
}

export default Text
