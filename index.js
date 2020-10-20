"use strict";

var GooglePassportAutoconfigurator = require('./GooglePassportAutoconfigurator');

function PassportjsGoogleAutoconfiguratorPlugin() {

  this.getSecurityStrategy = function(expressIntance, options) {
    return new GooglePassportAutoconfigurator(expressIntance, options);
  }
}

module.exports = PassportjsGoogleAutoconfiguratorPlugin;
