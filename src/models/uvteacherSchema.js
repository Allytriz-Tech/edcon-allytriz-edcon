import mongoose, {Schema} from "mongoose";

const UnverifiedTrainerSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: Number, required: true },
  expertise: [String],
  address: { type: String, required: true }, // Path to PDF file
  degreeFile: { type: String, required: true},
  idCardFile: { type: String, required: true }, // Path to PDF file
  resumeFile: { type: String, required: true } // Path to PDF file
});

export const UnverifiedTrainer = mongoose.model('UnverifiedTrainer', UnverifiedTrainerSchema);