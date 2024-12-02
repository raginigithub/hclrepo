
const ResponseHandler = (httpResponse, responseObject) => {
    if (responseObject.response_code === 1) {
        httpResponse.status(400);
    } else if (responseObject.response_code === 2) {
        httpResponse.status(500);
    } else if (responseObject.response_code === 10) {
        httpResponse.status(201);
    } else if (responseObject.response_code === -1) {
        httpResponse.status(401);
    } else if (responseObject.response_code === -2) {
        httpResponse.status(403);
    } else {
        httpResponse.status(200);
    }
    httpResponse.send(responseObject);
}

module.exports = ResponseHandler;