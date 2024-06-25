import {ApiError} from "../utils/ApiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import {UnverifiedRecruiter} from "../models/uvrecruiterSchema.model.js";

export const verifyUVRecruiterJWT = asyncHandler(async(req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("bearer", "");

        if(!token){
            throw new ApiError(404, "Unauthorised request");
        }

        const decodedToken = jwt.verify(token, process.env.UVRECRUITER_ACCESS_TOKEN_SECRET);

        const unverifiedrecruiter = UnverifiedRecruiter.findById(decodedToken._id).select("-password -refreshToken");

        if(!unverifiedrecruiter){
            throw new ApiError(401, "Invalid access token");
        }

        req.unverifiedrecruiter = unverifiedrecruiter;
        next();
    } catch (error) {
        throw new ApiError(400, error?.message || "Invalid access token");
    }
})
