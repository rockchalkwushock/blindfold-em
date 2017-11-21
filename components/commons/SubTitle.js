import PropTypes from 'prop-types'

/**
 * @function SubTitle
 * @description renders <h2 />
 *
 * @prop {String} text
 * @returns React Element
 */
const SubTitle = ({ text }) => <h2>{text}</h2>

SubTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default SubTitle
