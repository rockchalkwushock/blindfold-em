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
  <circle className={className} transform="rotate(-90, 50, 60)">
    <style jsx>{`
      circle {
        cx: 50;
        cy: 60;
        fill: transparent;
        r: 35;
        stroke-width: 4;
      }
      .outer {
        stroke: ${styles.colors.highLight};
      }
      .overlay {
        stroke: none;
        stroke-dasharray: 219; /* NOTE: https://stackoverflow.com/a/33922201/6520579 */
        stroke-linecap: round;
      }
      .cooldownAnimation {
        animation: ${duration}s linear normal forwards cooldown;
        stroke: ${styles.colors.text};
      }
      .timerAnimation {
        animation: ${duration}s linear normal forwards timer;
        stroke: ${styles.colors.text};
      }
      @keyframes timer {
        from {
          stroke-dashoffset: 219;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
      @keyframes cooldown {
        from {
          stroke-dashoffset: 0;
        }
        to {
          stroke-dashoffset: 219;
        }
      }
      @media (orientation: landscape) {
        circle {
          r: 50;
        }
        .overlay {
          stroke-dasharray: 314;
        }
        @keyframes timer {
          from {
            stroke-dashoffset: 314;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes cooldown {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 314;
          }
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
