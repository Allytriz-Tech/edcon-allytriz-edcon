import {ApiError} from "../utils/ApiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import {VerifiedTrainer} from "../models/vrecruiterSchema.model.js";

export const verifyVRecruiterJWT = asyncHandler(async(req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("bearer", "");

        if(!token){
            throw new ApiError(404, "Unauthorised request");
        }

        const decodedToken = jwt.verify(token, process.env.STUDENT_ACCESS_TOKEN_SECRET);

        const verifiedtrainer = VerifiedTrainer.findById(decodedToken._id).select("-password -refreshToken");

        if(!verifiedtrainer){
            throw new ApiError(401, "Invalid access token");
        }

        req.verifiedtrainer = verifiedtrainer;
        next();
    } catch (error) {
        throw new ApiError(400, error?.message || "Invalid access token");
    }
})
