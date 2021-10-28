/**
* Title: A Uptime Monitoring Application
* Description: A RESTful API Monitor up of down time of user defined links
* Author: Sourab Hossain
*/

//* Dependencies
const http = require('http');

// relative dependencies
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');

//# app object - module scaffolding
const app = {}

app.createServer = () => {
    const server = http.createServer(handleReqRes);

    // run the server
    server.listen(environment.port, () => {
        console.log(`Server is running on -> localhost:${environment.port}\nenvironment mode: ${environment.mode}`);
    })
}

app.createServer();
