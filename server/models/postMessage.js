import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  name: String,
  description: String,
  year: Number,
  duration: String
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;