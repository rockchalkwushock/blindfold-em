import Input from './Input'
import SubTitle from './SubTitle'

const Frame = ({ name, fn, text, value }) => (
  <div>
    <SubTitle text={text} />
    <Input name={name} fn={fn} value={value} />
  </div>
)

export default Frame
