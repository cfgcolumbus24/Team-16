import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  userEmail: {  // Changed from user to userEmail
    type: String,
    required: true,
    trim: true
  },
  text: {
    type: String,
    required: true,
    trim: true
  },
  image: String,
  tags: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    trim: true
  }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
export default Post;