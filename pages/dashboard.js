const commands = {
    verifyLogin: function (config) {
        return this
        .assert.title(config.title)
    }
  };
  
  module.exports = {
    commands: [commands],
    elements: {
    }
  };