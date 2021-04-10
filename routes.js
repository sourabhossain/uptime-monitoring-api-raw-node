/**
 * Title: Routes
 * Description: Application Routes
 * Author: Sourab Hossain
 * Date: 10-04-2021
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
