const FlexContainer = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 50em;
        min-height: 100vh;
      }
    `}</style>
  </div>
)

export default FlexContainer
