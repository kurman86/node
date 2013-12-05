function routeModule(fs) {
  console.log('routing initialize');


  function response404(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404: Page not found");
    response.end();
  }

  return {
    route: function(pathname, response) {
      console.log("About to route a request for " + pathname);

      if (pathname === '/') {
        fs.readFile('index.html', function(err, data) {
          if (err) {
            return response404(response);

          }
          response.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length});
          response.write(data);
          response.end();
        });


      } else {
        return response404(response);
      }
    }
  }
}
exports.route = routeModule;