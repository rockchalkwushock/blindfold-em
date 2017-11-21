import { styles } from '../../../lib'

const Svg = ({ children }) => (
  <svg
    baseProfile="full"
    viewBox="0 0 100 120"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
    <style jsx>{`
      svg {
        background-color: ${styles.colors.lowLight};
      }
    `}</style>
  </svg>
)

export default Svg
