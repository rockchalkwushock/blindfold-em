import Fragment from './Fragment'

const Input = ({ name, fn, value }) => (
  <Fragment>
    <input name={name} onChange={e => fn(e)} type="text" value={value} />
  </Fragment>
)

export default Input
