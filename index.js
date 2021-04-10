/**
 * Title: Uptime Moitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Sourab Hossain
 * Date: 08-04-2021
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system
// TODO: test done then remove test code

/**
 * -- DATA INSERT --
 * data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
 *     console.log(`error was`, err);
 * });
 *
 * -- DATA READ --
 * data.read('test', 'newFile', (err, result) => {
 *    console.log(err, result);
 * });
 *
 * -- Data Update --
 * data.update('test', 'newFile', {'name': 'Bangladesh', 'language': 'Bangla'}, (err) => {
 *  console.log(err);
 * });
 *
 * -- Data Delete --
 * data.delete('test', 'newFile', (err) => {
 *   console.log(err);
 * });
 */

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
