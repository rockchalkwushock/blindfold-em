import { styles } from '../../lib'

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
        height: 20vh;
        justify-content: center;
        letter-spacing: 0.3em;
        padding: 1em;
        text-align: center;
      }
      @media (min-width: 425px) {
        header {
          font-size: 1.25em;
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
