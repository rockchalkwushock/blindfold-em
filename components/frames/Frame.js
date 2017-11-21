import PropTypes from 'prop-types'

import { Button, FlexContainer, Input, Span, SubTitle } from '../commons'

/**
 * @function Frame
 * @description renders single frame for Wizard Form.
 *
 * @prop {String} error
 * @prop {Function} fn
 * @prop {String} msg
 * @prop {String} name
 * @prop {Function} next
 * @prop {String} text
 * @prop {String} value
 * @returns React Element
 */
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
  next: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Frame
