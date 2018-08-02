// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const mongodb = require('./db/mongodb.js');
/**
 * Create HTTP server.
 */
//const server = http.createServer(app);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to public
app.use(express.static(path.join(__dirname, 'public')));

//Cross Origin Settings
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

require('./routes/landingpage.routes.js')(app);
require('./routes/domain.routes.js')(app);
require('./routes/project.routes.js')(app);


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '7001';
app.set('port', port);


/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`Node running on localhost:${port}`));
