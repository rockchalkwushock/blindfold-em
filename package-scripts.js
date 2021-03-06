const npsUtils = require('nps-utils')

const { rimraf, series } = npsUtils

module.exports = {
  scripts: {
    clean: series(rimraf('coverage'), rimraf('.next')),
    commit: 'git cz',
    default: 'next start',
    lint: {
      default: 'eslint __tests__ components containers lib pages',
      fix: series.nps('lint --fix')
    },
    reportCoverage: 'codecov',
    test: {
      default: 'jest --runInBand --updateSnapshot',
      config: series.nps('test --showConfig'),
      coverage: series.nps('test --coverage'),
      watch: series.nps('test --watch')
    },
    validate: {
      withCoverage: series.nps('lint', 'test.coverage')
    }
  }
}
