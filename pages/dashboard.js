const commands = {
    verifyLogin: function (config) {
      this.api.pause(2000);        
       return this.assert.title(config.title)
    }
  };
  
  module.exports = {
    commands: [commands],
    elements: {
    }
  };