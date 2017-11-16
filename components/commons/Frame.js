import Button from './Button'
import FlexContainer from './FlexContainer'
import Fragment from './Fragment'
import Input from './Input'
import SubTitle from './SubTitle'

const Frame = ({ fn, name, next, prev, text, value }) => (
  <FlexContainer>
    <SubTitle text={text} />
    <Input name={name} fn={fn} value={value} />
    {next && !prev ? (
      <Button className="next" fn={next} text="Next" />
    ) : (
      <Fragment>
        <Button className="next" fn={next} text="Next" />
        <Button className="prev" fn={prev} text="Prev" />
      </Fragment>
    )}
  </FlexContainer>
)
export default Frame
