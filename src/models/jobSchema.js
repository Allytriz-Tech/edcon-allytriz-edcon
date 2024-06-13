import mongoose, {Schema} from "mongoose";

const JobSchema = new Schema({
  companyName: { type: String, required: true },
  recruiterName: { type: String, required: true },
  role: { type: String, required: true },
  salary: { type: Number },
  experience: { type: Number },
  skillsSet: [String],
  yearOfGraduation: [Number],
  eligibleDegrees: [String],
  location: [String],
  vacancy: { type: Number, required: true }
});

export const Job = mongoose.model('Job', JobSchema);