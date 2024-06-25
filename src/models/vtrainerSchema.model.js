import mongoose, {Schema} from "mongoose";

const VerifiedTrainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: Number, required: true },
  expertise: [String],
  address: { type: String, required: true }, // Path to PDF file
  degreeFile: { type: String, required: true }, // Path to PDF file
  resumeFile: { type: String, required: true }, // Path to PDF file
  idCardFile: { type: String, required: true }, // Path to PDF file
  my_classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

export const VerifiedTrainer = mongoose.model('VerifiedTrainer', VerifiedTrainerSchema);