/**
* Title: All route handlers
* Description: root route handlers
* Author: Sourab Hossain
*/

exports.rootHandler = (handleReqObj, callback) => {
    // root handler response
    callback(200, {
        message: `Hello World!`
    })
}
