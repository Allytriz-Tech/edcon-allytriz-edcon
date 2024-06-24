// Creating a method to handle upload of data into cloudinary(cloud storage)

import fs from "fs"
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({ // this is configuration for cloudinary to connect to the cloudinary cloud space (important : do not change any of the defined inputs and declarations) 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

const uploadOnCloudinary = async (localFilePath)=>{ //this is a reuseable method to upload an data from local computer to cloud storage
    try {
        if(!localFilePath) return null; // if no local path is available then upload will stop here

        const response = await cloudinary.uploader.upload(localFilePath, {resource_type: "auto"}); // here async upload is being done
        fs.unlinkSync(localFilePath); //this is to delete and unlink all the data from local computer

        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        
        return null;
    }
    
}

export {uploadOnCloudinary};