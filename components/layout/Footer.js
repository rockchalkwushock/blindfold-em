import { styles } from '../../lib'

/**
 * @function Footer
 * @description renders styled <footer />
 *
 * @prop {Array} children
 * @returns React Element
 */
const Footer = ({ children }) => (
  <footer>
    {children}
    <style jsx>{`
      footer {
        background-color: ${styles.colors.lowLight};
        display: flex;
        flex-direction: column;
        font-size: 1.2em;
        height: 10vh;
        justify-content: center;
        padding: 1em;
      }
      @media (orientation: landscape) {
        footer {
          font-size: 1em;
        }
      }
    `}</style>
  </footer>
)

export default Footer
