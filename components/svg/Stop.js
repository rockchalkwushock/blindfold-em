import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * @function Stop
 * @description renders <rect /> element with stop() functionality.
 *
 * @prop {String} className
 * @prop {Function} fn
 * @returns React Element
 */
const Stop = ({ className, fn }) => (
  <rect
    className={className}
    fill={styles.colors.highLight}
    height="10"
    onClick={fn}
    width="10"
    x="45"
    y="70"
  />
)

Stop.propTypes = {
  className: PropTypes.string,
  fn: PropTypes.func.isRequired
}

export default Stop
