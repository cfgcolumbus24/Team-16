import mongoose from 'mongoose';

const alumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  location: { type: String, required: true },
  artCategory: { type: String },
}, { timestamps: true });

const Alumni = mongoose.model('Alumni', alumniSchema);

export default Alumni;