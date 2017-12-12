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
const Link = ({ text, url, year }) => (
  <a href={url}>
    {`© ${year === 2017 ? year : `2017 - ${year}`} ${text}`}
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
  url: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}

export default Link
