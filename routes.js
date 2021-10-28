/**
* Title: routes
* Description: it's maintain all routes by path name
* Author: Sourab Hossain
*/

// relative dependencies
const { rootHandler } = require('./handlers/rootHandler');
const { notFoundHandler } = require('./handlers/notFoundHandler');
const { userHandler } = require('./handlers/userHandler');
const { tokenHandler } = require('./handlers/tokenHandler');

// All routes object
const routes = {
    '/': rootHandler,
    user: userHandler,
    token: tokenHandler,
    notFound: notFoundHandler
};

module.exports = routes;
