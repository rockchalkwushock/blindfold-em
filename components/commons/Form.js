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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex: auto;
        flex: auto;
      }
    `}</style>
  </form>
)

export default Form
