import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * @function Circle
 * @description renders <circle /> that is conditionally animated.
 *
 * @prop {String} className
 * @prop {Number} duration
 * @returns React Element
 */
const Circle = ({ className, duration }) => (
  <circle
    className={className}
    cx="50"
    cy="60"
    fill="transparent"
    r="35"
    strokeWidth="4"
    transform="rotate(-90, 50, 60)"
  >
    <style jsx>{`
      .outer {
        stroke: ${styles.colors.highLight};
      }
      .overlay {
        stroke: none;
        /*
          NOTE:
          @see https://stackoverflow.com/a/33922201/6520579
          @see https://codepen.io/AmeliaBR/pen/whcjq
          first arg is length of stroke
          second arg is length of gap
        */
        stroke-dasharray: 0 219;
        stroke-linecap: round;
      }
      .cooldownAnimation {
        animation: ${duration}s linear normal forwards cooldown;
        stroke: ${styles.colors.text};
      }
      .timerAnimation {
        -webkit-animation: ${duration}s linear normal forwards timer;
        animation: ${duration}s linear normal forwards timer;
        stroke: ${styles.colors.text};
      }
      @-webkit-keyframes timer {
        from {
          stroke-dasharray: 0 219;
        }
        to {
          stroke-dasharray: 219 0;
        }
      }
      @keyframes timer {
        from {
          stroke-dasharray: 0 219;
        }
        to {
          stroke-dasharray: 219 0;
        }
      }
      @-webkit-keyframes cooldown {
        from {
          stroke-dasharray: 219 0;
        }
        to {
          stroke-dasharray: 0 219;
        }
      }
      @keyframes cooldown {
        from {
          stroke-dasharray: 219 0;
        }
        to {
          stroke-dasharray: 0 219;
        }
      }
    `}</style>
  </circle>
)

Circle.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number
}

export default Circle
