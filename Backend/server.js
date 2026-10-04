import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Blog from './models/Blog.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection Path (with Standard Non-SRV Fallback)
const MONGO_URI = 
  process.env.MONGO_URI || 
  'mongodb://sumankumargin01234_db_user:eTNraamGY2vMyqbn@cluster0-shard-00-00.supfqzo.mongodb.net:27017,cluster0-shard-00-01.supfqzo.mongodb.net:27017,cluster0-shard-00-02.supfqzo.mongodb.net:27017/devblog?ssl=true&replicaSet=atlas-137h5p-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Database successfully!'))
  .catch((err) => {
    console.error('❌ Primary MongoDB Connection Failed, retrying with SRV...');
    // Fallback to SRV format if Standard fails
    const fallbackURI = 'mongodb+srv://sumankumargin01234_db_user:eTNraamGY2vMyqbn@cluster0.supfqzo.mongodb.net/devblog?retryWrites=true&w=majority';
    mongoose.connect(fallbackURI)
      .then(() => console.log('✅ Connected to MongoDB via SRV successfully!'))
      .catch((fallbackErr) => console.error('❌ MongoDB Connection Error:', fallbackErr));
  });

// Root route (Testing)
app.get('/', (req, res) => {
  res.send('🚀 DevBlog API Server is running smoothly!');
});

// 1. GET: Fetch all blogs from Database
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
});

// 2. GET: Fetch single blog by ID
app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog details', error });
  }
});

// 3. POST: Create a new blog in Database
app.post('/api/blogs', async (req, res) => {
  try {
    const { title, author, category, content } = req.body;
    const newBlog = new Blog({ title, author, category, content });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error saving blog', error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});