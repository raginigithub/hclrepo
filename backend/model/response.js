
class ResponseObject {
    constructor() {
        this.hasLog = false
        if (process.env.NODE_ENV !== 'production') {
            this.hasLog = true
        }
    }

    success(method, data = '', message = 'success') {
        if (this.hasLog) {
            console.log(`Service | Success | ${method} | `)
        }
        const response = new Object();
        response['response_code'] = 0;
        response['response_message'] = message;
        response['response_method'] = method;
        response['response'] = data;
        return response;
    }

    created(method, data = '', message = 'success') {
        if (this.hasLog) {
            console.log(`Service | Success | ${method} | `)
        }
        const response = new Object();
        response['response_code'] = 10;
        response['response_message'] = message;
        response['response_method'] = method;
        response['response'] = data;
        return response;
    }

    invalid(method, message = 'Invalid parameters') {
        if (this.hasLog) {
            console.log(`Service | Invalid | ${method} | ${message}`)
        }
        const response = new Object();
        response['response_code'] = 1;
        response['response_message'] = message;
        response['response_method'] = method;
        response['response'] = '';
        return response;
    }

    failure(method, error, message = 'Sorry something went wrong') {
        if (this.hasLog) {
            console.log(`Service | Failed | ${method} | `, error)
        }

        const response = new Object();
        response['response_code'] = 2;
        response['response_message'] = message;
        response['response_method'] = method;
        response['response'] = '';
        return response;
    }

    unauthorized(method, message = 'unauthorized') {
        if (this.hasLog) {
            console.log(`Service | unauthorized | ${method} | `)
        }
        const response = new Object();
        response['response_code'] = -1;
        response['response_message'] = message;
        response['response_method'] = method;
        response['response'] = '';
        return response;
    }

    forbidden(method, message = 'forbidden') {
        if (this.hasLog) {
            console.log(`Service | forbidden | ${method} | `)
        }
        const response = new Object();
        response['response_code'] = -2;
        response['response_message'] = message;
        response['response_method'] = method;
        response['response'] = '';
        return response;
    }
}

export default new ResponseObject();