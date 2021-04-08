/**
 * Title: Uptime Moitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Sourab Hossain
 * Date: 08-04-2021
 */

// dependencies
const http = require("http");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handle request response
app.handleReqRes = (req, res) => {
  // response handle
  res.end("Hello World!");
};

// start the server
app.createServer();
