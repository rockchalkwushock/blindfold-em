import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * @function Span
 * @description renders styled & animated <span />
 *
 * @prop {String} msg
 * @returns React Element
 */
const Span = ({ msg }) => (
  <span>
    {msg}
    <style jsx>{`
      span {
        -webkit-animation-name: fade-in;
        animation-name: fade-in;
        -webkit-animation-duration: 0.7s;
        animation-duration: 0.7s;
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        color: ${styles.colors.highLight};
        font-weight: 400;
        margin-top: 0.5em;
        text-align: center;
        width: 75%;
      }
      @-webkit-keyframes fade-in {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 0.25;
        }
        40% {
          opacity: 0.45;
        }
        60% {
          opacity: 0.65;
        }
        80% {
          opacity: 0.85;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        20% {
          opacity: 0.25;
        }
        40% {
          opacity: 0.45;
        }
        60% {
          opacity: 0.65;
        }
        80% {
          opacity: 0.85;
        }
        100% {
          opacity: 1;
        }
      }
    `}</style>
  </span>
)

Span.propTypes = {
  msg: PropTypes.string.isRequired
}

export default Span
