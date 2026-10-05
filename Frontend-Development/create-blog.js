const API_URL = 'http://localhost:5000/api/blogs';

if (window.tsParticles) {
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: { value: 30 },
      color: { value: "#8b5cf6" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: 3 },
      move: { enable: true, speed: 1 }
    }
  });
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

const urlParams = new URLSearchParams(window.location.search);
const editId = urlParams.get('edit');

if (editId) {
  document.getElementById('formTitle').innerText = 'Edit Article';
  document.getElementById('submitBtn').innerText = 'Update Blog';
  fetchBlogForEdit(editId);
}

async function fetchBlogForEdit(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const blog = await res.json();
    document.getElementById('blogId').value = blog._id;
    document.getElementById('title').value = blog.title;
    document.getElementById('author').value = blog.author;
    document.getElementById('category').value = blog.category;
    document.getElementById('content').value = blog.content;
  } catch (err) {
    showToast('Failed to load blog data');
  }
}

document.getElementById('blogForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('blogId').value;
  const blogData = {
    title: document.getElementById('title').value.trim(),
    author: document.getElementById('author').value.trim(),
    category: document.getElementById('category').value,
    content: document.getElementById('content').value.trim()
  };

  try {
    let res;
    if (id) {
      res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData)
      });
    } else {
      res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData)
      });
    }

    const data = await res.json();

    if (res.ok) {
      showToast(id ? 'Blog updated successfully!' : 'Blog created successfully!');
      setTimeout(() => window.location.href = 'dashboard.html', 1200);
    } else {
      console.error('Server error details:', data);
      showToast(data.message || 'Error saving blog');
    }
  } catch (err) {
    console.error('Network error:', err);
    showToast('Network error: Server disconnected');
  }
});