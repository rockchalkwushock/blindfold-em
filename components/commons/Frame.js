import PropTypes from 'prop-types'

import Button from './Button'
import FlexContainer from './FlexContainer'
import Input from './Input'
import Span from './Span'
import SubTitle from './SubTitle'

const Frame = ({ error, fn, msg, name, next, text, value }) => (
  <FlexContainer className="frame">
    <SubTitle text={text} />
    <Input fn={fn} name={name} msg={msg} value={value} />
    {error ? <Span msg={error} /> : null}
    <Button className="next" fn={next} text="Next" />
  </FlexContainer>
)

Frame.propTypes = {
  error: PropTypes.string,
  fn: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  next: PropTypes.func,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Frame
