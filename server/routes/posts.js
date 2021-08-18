import express from 'express'
import auth from '../middleware/auth.js'
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js'

const router = express.Router()
router.get('/', auth, getPosts)
router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)

export default router;