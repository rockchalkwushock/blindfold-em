const Header = ({ children }) => (
  <header>
    {children}
    <style jsx>{`
      header {
        align-items: center;
        background-color: lightcoral;
        display: flex;
        flex-direction: column;
        height: 20vh;
        justify-content: center;
        padding: 1em;
        text-align: center;
      }
    `}</style>
  </header>
)

export default Header
