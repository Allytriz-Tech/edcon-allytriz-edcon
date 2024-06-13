import mongoose, {Schema} from "mongoose";

const UnverifiedRecruiterSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  company_name: { type: String, required: true },
  recruiterid: { type: String, required: true }, // Path to PDF file
  linkedinUrl: { type: String }
});

export const UnverifiedRecruiter = mongoose.model('UnverifiedRecruiter', UnverifiedRecruiterSchema);