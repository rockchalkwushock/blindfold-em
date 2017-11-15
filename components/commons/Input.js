// NOTE: Must wrap in a div here to use `styled-jsx` since <input /> takes no children.
// REVIEW: I could setup <input /> through global styles if they all remain the same.

const Input = ({ name, fn, value }) => (
  <div>
    <input name={name} onChange={e => fn(e)} type="text" value={value} />
  </div>
)

export default Input
