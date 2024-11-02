import mongoose, { Schema } from 'mongoose';

const testSchema = new Schema(
  {
    message: String,
  }
);

const Test = mongoose.model('Test', testSchema);

export default Test;