var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    contributing: util.copy('CONTRIBUTING.md', 'CONTRIBUTING.md'),
  },
});
