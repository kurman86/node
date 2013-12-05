var server = require("./server");
var router = require("./router");
var fs = require('fs');

var routeModule = router.route(fs);

var serverModule = server.serverModule(routeModule.route);

serverModule.start();
