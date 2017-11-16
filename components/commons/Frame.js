/* eslint-disable no-nested-ternary */
import Button from './Button'
import { Fragment } from '../../lib'
import Input from './Input'
import SubTitle from './SubTitle'

const Frame = ({ fn, name, next, prev, text, value }) => (
  <div>
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
  </div>
)
export default Frame
