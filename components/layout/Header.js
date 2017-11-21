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
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: ${styles.colors.lowLight};
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        font-family: ${styles.fonts.permMarker};
        font-size: 1.25em;
        height: 15vh;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
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
