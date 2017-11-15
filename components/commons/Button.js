const Button = ({ className, condition, fn, text }) => (
  <button className={className} disabled={condition} onClick={() => fn()}>
    {text}
  </button>
)

export default Button
