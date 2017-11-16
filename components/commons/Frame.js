import Button from './Button'
import FlexContainer from './FlexContainer'
import Input from './Input'
import SubTitle from './SubTitle'

const Frame = ({ fn, name, next, prev, text, value }) => (
  <FlexContainer className="frame">
    <SubTitle text={text} />
    <Input name={name} fn={fn} value={value} />
    {next && !prev ? (
      <Button className="next" fn={next} text="Next" />
    ) : (
      <FlexContainer className="buttons">
        <Button className="prev" fn={prev} text="Prev" />
        <Button className="next" fn={next} text="Next" />
      </FlexContainer>
    )}
  </FlexContainer>
)
export default Frame
