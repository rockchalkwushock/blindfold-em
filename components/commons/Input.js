import PropTypes from 'prop-types'

import Fragment from './Fragment'
import { styles } from '../../lib'

const Input = ({ msg, name, fn, value }) => (
  <Fragment>
    <input
      name={name}
      onChange={fn}
      placeholder={msg}
      type="text"
      value={value}
    />
    <style jsx>{`
      input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid ${styles.colors.highLight};
        color: ${styles.colors.text};
        font-family: ${styles.fonts.kalam};
        font-size: 1.25em;
        margin-top: 1em;
        outline: none;
        text-align: center;
        width: 80%;
      }
    `}</style>
  </Fragment>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Input
