import moment from 'moment'

import styles from './styles'

/**
 * @function format
 * @description Function for formating moment.duration()
 *
 * @see https://github.com/moment/moment/issues/1048#issue-19008383
 *
 * @param {Object} time
 * @returns {String} "0:12:00"
 */
export const format = time =>
  Math.floor(time.asHours()) +
  moment.utc(time.asMilliseconds()).format(':mm:ss')

export { styles }
