import { styles } from '../../lib'

const Footer = ({ children }) => (
  <footer>
    {children}
    <style jsx>{`
      footer {
        background-color: ${styles.colors.lowLight};
        display: flex;
        flex-direction: column;
        height: 15vh;
        padding: 1em;
      }
    `}</style>
  </footer>
)

export default Footer
