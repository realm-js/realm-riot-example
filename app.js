var realm = require('realm-js');
var server = require('realm-server');

require("./build/backend.js");
require("./build/universal.js");

realm.start('app.Server');
