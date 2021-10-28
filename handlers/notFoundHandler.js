/**
* Title: All route handlers
* Description: not found route handlers
* Author: Sourab Hossain
*/

exports.notFoundHandler = (handleReqObj, callback) => {
    // not found route response
    callback(404, {
        message: `404 Invalid route: ${handleReqObj.trimmedPath}`
    })
}
