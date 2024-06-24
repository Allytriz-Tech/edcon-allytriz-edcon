// Creating an method to handle all the response in a standard format and will be used as an api to create all new response

class ApiResponse{
    constructor( // this constructor will contain all the custom values of user response request
        message = "success", // this will send response message (by defaut it is set to success)
        statusCode, // this will send the response status code as per user requirement
        data, // this will contain all the reponse data
    )
    {
        this.message = message;
        this.data = data; 
        this.statusCode = statusCode;
        this.success = statusCode < 400 ; 
    }
}

export {ApiError};