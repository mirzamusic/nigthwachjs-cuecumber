const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const config = require('../tests.config');


defineSupportCode(({ Given, Then, When }) => {
  When(/^I open PhpTravels admin and log in$/, () => {
   return client.page.login()
   .navigate()
   .login(config.login);
  });
  When(/^I open PhpTravels admin and log in with invalid data$/, () => {
    return client.page.login()
    .navigate()
    .login(config.wrongLogin);
   });
  Then(/^I should be redirected to dashboard page$/, () => {
   return client.page.dashboard()
    .verifyLogin(config.login);
    });
})
