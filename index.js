const express = require('express');
const methodOverride = require('method-override');
const db = require('./db');
const cookieParser = require('cookie-parser');

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

 // Init express app
const app = express();

// Set up middleware
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===========================
 * users
 * ===========================
 */



/**
 * ===================================
 * Routes
 * ===================================
 */

require('./routes')(app, db);

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

// Run clean up actions when server shuts down
server.on('close', () => {
  console.log('Closed express server');

  db.pool.end(() => {
    console.log('Shut down db connection pool');
  });
});