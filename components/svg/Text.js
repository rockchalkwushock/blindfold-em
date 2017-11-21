import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * @function Text
 * @description renders <text /> element with formatted time.
 *
 * @prop {String} time
 * @returns React Element
 */
const Text = ({ time }) => (
  <text
    fill={styles.colors.highLight}
    fontFamily={styles.fonts.kalam}
    fontSize="1em"
    x="25"
    y="65"
  >
    {time}
  </text>
)

Text.propTypes = {
  time: PropTypes.string.isRequired
}

export default Text
