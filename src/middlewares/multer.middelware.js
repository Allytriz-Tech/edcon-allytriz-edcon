// Creating a middleware to upload file from any local machine to server 

import multer from "multer";

const storage = multer.diskStorage( // this method uses any mark and take data destination and its filename on local disk 
    {
        destination: function(_, _, cb){ // this marks data destination on local machine with an callback
            cb(null, "./public/temp");
        },
        filename: function( _, file, cb){ // this marks data name on local machine with an callback
            cb(null, file.originalname) 
        }
    }
)

export const upload = multer({storage}); // this uploads the data from local machine to the backend

