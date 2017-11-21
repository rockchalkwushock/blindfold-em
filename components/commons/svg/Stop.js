import PropTypes from 'prop-types'

import { styles } from '../../../lib'

const Stop = ({ fn }) => (
  <rect
    fill={styles.colors.highLight}
    height="10"
    onClick={fn}
    width="10"
    x="45"
    y="70"
  />
)

Stop.propTypes = {
  fn: PropTypes.func.isRequired
}

export default Stop
