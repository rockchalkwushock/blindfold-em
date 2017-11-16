const FlexContainer = ({ children, className }) => (
  <div className={className}>
    {children}
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
      }
      .layout {
        margin: auto;
        max-width: 50em;
        min-height: 100vh;
      }
      .main {
        background-color: lightblue;
        height: 65vh;
        padding: 2em 3em;
      }
    `}</style>
  </div>
)

export default FlexContainer
