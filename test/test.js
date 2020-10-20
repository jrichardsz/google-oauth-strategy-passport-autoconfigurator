var microfrontendTools = require('../index');

//TODO : mock window object to make a real test
const window = '';

var urlHelper = new microfrontendTools.UrlHelper();

// assert not null 
//console.log("LocationBasePath:"+urlHelper.getLocationBasePath())