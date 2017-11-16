import PropTypes from 'prop-types'

import SubTitle from './SubTitle'
import FlexContainer from './FlexContainer'
import Fragment from './Fragment'

const CoolDownDisplay = ({ base, current }) => (
  <Fragment>
    <SubTitle text={`Your selected cooldown: ${base}`} />
    <SubTitle text={`Current Cooldown: ${current}`} />
  </Fragment>
)

const TimerDisplay = ({ base, current }) => (
  <Fragment>
    <SubTitle text={`Your selected time: ${base}`} />
    <SubTitle text={`Current Time: ${current}`} />
  </Fragment>
)

const Display = ({
  activity,
  baseCool,
  baseTime,
  condition,
  currCool,
  currTime
}) => (
  <FlexContainer>
    <SubTitle text={`Your activity is: ${activity}`} />
    {!condition ? (
      <TimerDisplay base={baseTime} current={currTime} />
    ) : (
      <CoolDownDisplay base={baseCool} current={currCool} />
    )}
  </FlexContainer>
)

CoolDownDisplay.propTypes = {
  base: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired
}

Display.propTypes = {
  activity: PropTypes.string.isRequired,
  baseCool: PropTypes.string.isRequired,
  baseTime: PropTypes.string.isRequired,
  condition: PropTypes.number,
  currCool: PropTypes.string.isRequired,
  currTime: PropTypes.string.isRequired
}

TimerDisplay.propTypes = {
  base: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired
}

export default Display
