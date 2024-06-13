import mongoose, {Schema} from "mongoose";

const VerifiedRecruiterSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  company_name: { type: String, required: true },
  recruiterid: { type: String, required: true }, // Path to PDF file
  //offer_letter: { type: String, required: true }, // Path to PDF file
  linkedinUrl: { type: String },
  my_jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }]
});

export const VerifiedRecruiter = mongoose.model('VerifiedRecruiter', VerifiedRecruiterSchema);