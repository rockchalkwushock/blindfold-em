import PropTypes from 'prop-types'

import { styles } from '../../lib'

const Button = ({ className, fn, text }) => (
  <button className={className} onClick={() => fn()}>
    {text}
    <style jsx>{`
      button {
        background-color: ${styles.colors.main};
        border: none;
        border-radius: 15px;
        box-shadow: 4px 4px 4px ${styles.colors.highLight};
        color: ${styles.colors.text};
        font-family: ${styles.fonts.kalam};
        font-size: 1.5em;
        letter-spacing: 0.25em;
        margin: 2em 0.25em 0 0.25em;
        outline: none;
        padding: 0.25em;
        width: 80%;
      }
      .reset {
        padding: 0.5em;
        width: 25%;
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
