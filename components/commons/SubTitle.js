import PropTypes from 'prop-types'

const SubTitle = ({ text }) => <h2>{text}</h2>

SubTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default SubTitle
