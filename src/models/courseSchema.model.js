import mongoose, {Schema} from "mongoose";

const CourseSchema = new Schema({
  courseTitle: { type: String, required: true },
  description: { type: String, required: true },
  trainerName: { type: String, required: true },
  duration: { type: String },
  location: { type: String },
  timing: { type: String },
  seatsAvailable: { type: Number },
  coursePrice: { type: Number },
});

export const Course = mongoose.model('Course', CourseSchema);