import PropTypes from 'prop-types'

import { styles } from '../../lib'

/**
 * @function Link
 * @description renders styled <a />
 *
 * @prop {String} text
 * @prop {String} url
 * @returns React Element
 */
const Link = ({ text, url }) => (
  <a href={url}>
    {text}
    <style jsx>{`
      a {
        color: ${styles.colors.text};
        font-family: ${styles.fonts.kalam};
        text-decoration: none;
      }
    `}</style>
  </a>
)

Link.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Link
