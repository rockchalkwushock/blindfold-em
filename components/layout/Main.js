const Main = ({ children }) => (
  <main>
    {children}
    <style jsx>{`
      main {
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        height: 65vh;
        padding: 2em 3em;
      }
    `}</style>
  </main>
)

export default Main
