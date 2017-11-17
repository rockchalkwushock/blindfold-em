import PropTypes from 'prop-types'

import Button from './Button'
import FlexContainer from './FlexContainer'
import SubTitle from './SubTitle'

const Completed = ({ activity, fn }) => (
  <FlexContainer className="completed">
    <SubTitle text={`Congratulations on completing: ${activity}!`} />
    <Button className="reset" fn={fn} text="Reset" />
  </FlexContainer>
)

Completed.propTypes = {
  activity: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired
}

export default Completed
