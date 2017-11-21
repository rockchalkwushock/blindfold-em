/**
 * @function Form
 * @description renders styled <form />
 *
 * @prop {Array} children
 * @returns React Element
 */
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
