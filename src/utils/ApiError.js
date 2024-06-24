class ApiError extends Error{
    constructor(
        message, 
        statusCode,
        errors = []
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