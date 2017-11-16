import SubTitle from './SubTitle'
import { Fragment } from '../../lib'

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
}) => {
  const viewState = !condition ? (
    <TimerDisplay base={baseTime} current={currTime} />
  ) : (
    <CoolDownDisplay base={baseCool} current={currCool} />
  )
  return (
    <div>
      <SubTitle text={`Your activity is: ${activity}`} />
      {viewState}
    </div>
  )
}

export default Display
