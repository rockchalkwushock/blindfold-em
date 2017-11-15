import SubTitle from './SubTitle'

const Timer = ({ activity, cooldown, timer }) => (
  <div>
    <SubTitle text={`Your activity: ${activity}`} />
    <SubTitle text={`Your timer: ${timer}`} />
    <SubTitle text={`Your cooldown: ${cooldown}`} />
  </div>
)

export default Timer
