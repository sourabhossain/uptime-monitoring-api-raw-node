/**
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Sourab Hossain
 * Date: 10-04-2021
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
