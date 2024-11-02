import mongoose, { Schema } from 'mongoose';

const opportunitySchema = new Schema({
  opportunityName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  artCategory: {
    type: String,
  }
}, { timestamps: true });

const Opportunity = mongoose.model('opportunity', opportunitySchema);

export default Opportunity;