/**
 * Title: Uptime Moitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Sourab Hossain
 * Date: 08-04-2021
 */

// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');


// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
};

app.init();

// export the app
module.exports = app;
