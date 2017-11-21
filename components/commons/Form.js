const Form = ({ children }) => (
  <form>
    {children}
    <style jsx>{`
      form {
        display: flex;
        flex-direction: column;
        flex: auto;
      }
    `}</style>
  </form>
)

export default Form
