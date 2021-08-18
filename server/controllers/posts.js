import PostMessage from "../models/postMessage.js"
import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new PostMessage({ ...post, name: post.name, createdAt: new Date().toISOString() })
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = req.body
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID')
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
  res.json(updatedPost)
}

export const deletePost = async (req, res) => {
  const { id } = await req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID')
  await PostMessage.findByIdAndRemove(id)
  res.json({ message: 'Post deleted successfully' })
}
