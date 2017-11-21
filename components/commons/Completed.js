import PropTypes from 'prop-types'

import Button from './Button'
import FlexContainer from './FlexContainer'
import SubTitle from './SubTitle'

/**
 * @function Completed
 * @description renders view for completed state of timer.
 *
 * @prop {String} activity
 * @prop {Function} fn
 * @returns React Element
 */
const Completed = ({ activity, fn }) => (
  <FlexContainer className="completed">
    <SubTitle text={`Congratulations on completing: ${activity}!`} />
    <Button className="animated pulse" fn={fn} text="Reset" />
  </FlexContainer>
)

Completed.propTypes = {
  activity: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired
}

export default Completed
