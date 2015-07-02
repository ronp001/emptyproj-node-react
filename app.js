var express = require('express'),
    methods = require('./routes/methods'),
    d = require('domain').create(),
    app = express();



//-- Prepare the server

app.use(express.static('www'));

app.set('port', process.env.PORT || 3000);

// see http://stackoverflow.com/questions/7310521/node-js-best-practice-exception-handling
d.on('error', function(err) {
    if ( err.errno === 'EADDRINUSE' ) {
      console.log("Cannot start server: port %d is already in use", app.get("port"));
      process.exit(1);
    } else {
      throw err;
    }
});



//-- Uncomment to send headers on all requests
/*
app.all('*', function(req, res, next) {
    //-- CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
*/


//-- Application methods referenced here
app.get('/hello-world', methods.helloWorld);



//-- Start the server
d.run(function() {
    app.listen(app.get('port'), function () {
        console.log('Server is now listening on port %d', app.get("port"));
    });
});
