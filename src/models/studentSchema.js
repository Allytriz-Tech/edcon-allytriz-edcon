import mongoose, {Schema} from "mongoose";

const StudentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  degree: { type: String, required: true },
  graduationYear: { type: Number, required: true },
  cgpa: { type: Number, required: true },
  contact: { type: String, required: true },
  instituteName: { type: String, required: true},
  role: {type:String},
  location: {
    type: String, required: true
    },
    preferredLocation: {
    type: String, required: true
  }
});

export const Student = mongoose.model('Student', StudentSchema);