import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


let blogs = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    author: "Suman Kumar",
    category: "Frontend",
    date: "Oct 1, 2026",
    content: "Learn the basics of HTML, CSS, and JavaScript to start building modern web applications. This guide covers the essential roadmap for beginners..."
  },
  {
    id: 2,
    title: "Building REST APIs with Node.js & Express",
    author: "Suman Kumar",
    category: "Backend",
    date: "Oct 3, 2026",
    content: "A complete guide on setting up a backend server, defining routes, handling requests, and connecting to databases using modern Node.js and Express.js."
  },
  {
    id: 3,
    title: "Mastering UI/UX Principles for Developers",
    author: "Jane Doe",
    category: "UI/UX",
    date: "Oct 5, 2026",
    content: "Understand the core principles of User Interface and User Experience design. Learn how developers can implement visual hierarchy, accessibility, and modern layouts."
  }
];

// Routes
app.get('/', (req, res) => res.send('DevBlog Backend Running'));

app.get('/api/blogs', (req, res) => {
  res.status(200).json(blogs);
});

app.post('/api/blogs', (req, res) => {
  const { title, content, author, category } = req.body;
  if (!title || !content) return res.status(400).json({ message: 'Title/Content required' });

  const newBlog = {
    id: Date.now(),
    title,
    content,
    author: author || 'Suman Kumar',
    category: category || 'General',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  };
  blogs.unshift(newBlog);
  res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));