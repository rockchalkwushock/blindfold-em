import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * @function Button
 * @description renders <button /> with onClick functionality
 *
 * @prop {String} className
 * @prop {Function} fn
 * @prop {String} text
 * @returns React Element
 */
const Button = ({ className, fn, text }) => (
  <button className={className} onClick={fn}>
    {text}
    <style jsx>{`
      button {
        background-color: ${styles.colors.main};
        border: none;
        box-shadow: 2px 2px 2px ${styles.colors.highLight};
        color: ${styles.colors.text};
        font-family: ${styles.fonts.kalam};
        font-size: 1.5em;
        letter-spacing: 5px;
        margin: 0.5em 0.25em 0 0.25em;
        outline: none;
        padding: 0.25em;
        width: 50%;
      }
    `}</style>
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  fn: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
