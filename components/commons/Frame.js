import FlexContainer from './FlexContainer'
import Input from './Input'
import SubTitle from './SubTitle'

const Frame = ({ name, fn, text, value }) => (
  <FlexContainer>
    <SubTitle text={text} />
    <Input name={name} fn={fn} value={value} />
  </FlexContainer>
)

export default Frame
