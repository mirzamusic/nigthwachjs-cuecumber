//const connfig = require('../tests.config');
// npm run e2e-test -- features/smoke.feature --env chrome
const commands = {
    login: function (config) {
        return this
        .waitForElementVisible('@usernameInput',
          'Verify if UserName field is visible')
        .clearValue('@usernameInput')
        .setValue('@usernameInput', config.userName )
        .clearValue('@passwordInput')
        .setValue('@passwordInput', config.password)
        .click('@submitButton')
    }
  };

  module.exports = {
    commands: [commands],
    url: 'https://www.phptravels.net/admin', 
    elements: {
      usernameInput: {
        selector: 'input[name="email"][type="text"]' 
      },
      passwordInput: {
        selector: 'input[name="password"][type="password"]'
      },
      submitButton: {
        selector: 'input[type=submit]'
      },
    }
  };