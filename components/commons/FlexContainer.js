import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * @function FlexContainer
 * @description renders a flex-div with conditional styles based on className
 *
 * @prop {Array} children
 * @prop {String} className
 * @returns React Element
 */
const FlexContainer = ({ children, className }) => (
  <div className={className}>
    {children}
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
      }
      .layout {
        margin: auto;
        max-width: 800px;
        min-height: 100vh;
      }
      .main {
        background-color: ${styles.colors.main};
        height: 100vh;
        padding: 0.5em;
      }
      .wizard {
        flex: auto;
      }
      .completed,
      .frame,
      .timer {
        align-items: center;
        background-color: ${styles.colors.lowLight};
        box-shadow: 4px 4px 4px ${styles.colors.highLight};
        flex: auto;
        justify-content: center;
        padding: 0 0.5em;
        text-align: center;
      }
      @media (orientation: landscape) {
        .main {
          padding: 1em;
        }
      }
      @media (min-width: 768px) {
        .main {
          padding: 2em 3em;
        }
      }
    `}</style>
  </div>
)

FlexContainer.propTypes = {
  className: PropTypes.string
}

export default FlexContainer
