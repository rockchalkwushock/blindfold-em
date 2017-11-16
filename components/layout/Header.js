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
        font-size: 2em;
        height: 20vh;
        justify-content: center;
        letter-spacing: 0.7em;
        padding: 1em;
        text-align: center;
      }
    `}</style>
  </header>
)

export default Header
