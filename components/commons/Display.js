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

export default Display
