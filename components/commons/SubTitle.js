import PropTypes from 'prop-types'

/**
 * @function SubTitle
 * @description renders <h2 />
 *
 * @prop {String} className
 * @prop {String} text
 * @returns React Element
 */
const SubTitle = ({ className, text }) => <h2 className={className}>{text}</h2>

SubTitle.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default SubTitle
