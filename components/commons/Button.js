const Button = ({ condition, fn, text }) => (
  <button disabled={condition} onClick={() => fn()}>
    {text}
  </button>
)

export default Button
