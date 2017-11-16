const Button = ({ className, fn, text }) => (
  <button className={className} onClick={() => fn()}>
    {text}
  </button>
)

export default Button
