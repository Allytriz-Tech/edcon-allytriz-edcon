
// Creating an method to handle all the async operations by resolving the promise with an primary function requesHandler to request for async operation 

const asyncHandler = (requestHandler) => {return(req, res, next)=>{  // here next parameter is given to reslove middleware request
    Promise.resolve(requestHandler(req, res, next)) 
           .catch((error)=> next(error));
}}


export {asyncHandler};