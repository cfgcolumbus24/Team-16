import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  interests: {
    type: String
  },
  location: { 
    type: String
  },
  description: { 
    type: String 
  },
  category: { 
    type: String
   },
  
  artCategory: { 
    type: String 
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;