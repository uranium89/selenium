var snow = require('./servicenow-deployment/auto_deployment');
var server = process.argv[2];
var srcServer = process.argv[3];
var username = process.argv[4];
var password = process.argv[5];
var path = process.argv[6];
var log = process.argv[7];

snow.deploy(server,srcServer, username, password, path, log);