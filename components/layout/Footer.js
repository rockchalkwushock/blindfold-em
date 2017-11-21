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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        font-size: 1.2em;
        height: 10vh;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 1em;
      }
      @media (orientation: landscape) {
        footer {
          font-size: 1em;
        }
      }
      @media (min-width: 48em) {
        footer {
          font-size: 1.4em;
        }
      }
    `}</style>
  </footer>
)

export default Footer
