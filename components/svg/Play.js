import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * @function Play
 * @description renders <polygon /> with play() functionality.
 *
 * @prop {String} className
 * @prop {Function} fn
 * @returns React Element
 */
const Play = ({ className, fn }) => (
  <polygon
    className={className}
    fill={styles.colors.highLight}
    onClick={fn}
    points="37 40, 37 80, 70 60"
  />
)

Play.propTypes = {
  className: PropTypes.string,
  fn: PropTypes.func.isRequired
}

export default Play
