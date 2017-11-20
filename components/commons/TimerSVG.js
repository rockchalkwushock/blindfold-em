/* eslint-disable no-nested-ternary */
import { styles } from '../../lib'
/* FIXME: `state` is terrible find a better way */
const TimerSVG = ({ duration, state, time }) => (
  <svg
    height="300"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="300"
  >
    <text x="75" y="170">
      {time}
    </text>
    <circle
      className={
        state === 'timer'
          ? 'timerRunning'
          : state === 'cooldown' ? 'cooldownRunning' : null
      }
    />
    <style jsx>{`
      circle {
        cx: 150;
        cy: 150;
        fill: transparent;
        r: 100;
        stroke-dasharray: 628; /* NOTE: https://stackoverflow.com/a/33922201/6520579 */
        stroke-linecap: round;
        stroke-width: 10;
      }
      text {
        font-family: ${styles.fonts.kalam};
        font-size: 3em;
        fill: ${styles.colors.highLight};
      }
      .cooldownRunning {
        animation: ${duration}s linear normal forwards cooldown;
        stroke: ${styles.colors.text};
      }
      .timerRunning {
        animation: ${duration}s linear normal forwards warmup;
        stroke: ${styles.colors.text};
      }
      @keyframes warmup {
        from {
          stroke-dashoffset: 628;
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
          stroke-dashoffset: 628;
        }
      }
    `}</style>
  </svg>
)

export default TimerSVG
