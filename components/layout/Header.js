import { styles } from '../../lib'

/**
 * @function Header
 * @description renders styled <header />
 *
 * @prop {Array} children
 * @returns React Element
 */
const Header = ({ children }) => (
  <header>
    {children}
    <style jsx>{`
      header {
        align-items: center;
        background-color: ${styles.colors.lowLight};
        display: flex;
        flex-direction: column;
        font-family: ${styles.fonts.permMarker};
        font-size: 1.25em;
        height: 15vh;
        justify-content: center;
        letter-spacing: 0.3em;
        padding: 1em;
        text-align: center;
      }
      @media (min-width: 425px) {
        header {
          font-size: 1.5em;
        }
      }
      @media (min-width: 768px) {
        header {
          font-size: 1.75em;
          letter-spacing: 0.5em;
        }
      }
    `}</style>
  </header>
)

export default Header
