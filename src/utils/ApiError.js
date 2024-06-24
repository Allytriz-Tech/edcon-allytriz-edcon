// Creating an error handling utility and will be used as api to throw any error

class ApiError extends Error{
    constructor( // this constructor will be handling all inputs as per request
        message, // this will contain all the message from error class
        statusCode, // this will contain the user error type error status code
        errors = [] // this will show all the in form of array element objects
    )
    {
        super(message);
        this.message = message;
        this.data = null; 
        this.errors = errors;
        this.statusCode = statusCode;
        this.success = false;
    }
}

export {ApiError};