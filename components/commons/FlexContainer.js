import PropTypes from 'prop-types'

import { styles } from '../../lib'

const FlexContainer = ({ children, className }) => (
  <div className={className}>
    {children}
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
      }
      .completed,
      .frame,
      .timer {
        align-items: center;
        background-color: ${styles.colors.lowLight};
        border-radius: 25%;
        box-shadow: 4px 4px 4px ${styles.colors.highLight};
        flex: auto;
        justify-content: center;
        padding: 2em;
      }
      .layout {
        margin: auto;
        max-width: 50em;
        min-height: 100vh;
      }
      .main {
        background-color: ${styles.colors.main};
        height: 65vh;
        padding: 2em 3em;
      }
      .wizard {
        flex: auto;
      }
    `}</style>
  </div>
)

FlexContainer.propTypes = {
  className: PropTypes.string
}

export default FlexContainer
