const API_URL = 'https://full-stack-web-development-intern.onrender.com/api/blogs';

const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

// Auth check: login page redirect agar session active nahi hai
if (!token || !user) {
  window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const userInfo = document.getElementById('userInfo');
  if (userInfo && user.name) {
    userInfo.innerText = `Welcome, ${user.name}`;
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.clear();
      window.location.href = 'login.html';
    });
  }

  fetchUserBlogs();
});

async function fetchUserBlogs() {
  try {
    const res = await fetch(`${API_URL}/user`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (res.status === 401) {
      localStorage.clear();
      window.location.href = 'login.html';
      return;
    }

    const blogs = await res.json();
    renderBlogs(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
}

function renderBlogs(blogs) {
  const container = document.getElementById('blogsContainer');
  if (!container) return;

  if (!Array.isArray(blogs) || blogs.length === 0) {
    container.innerHTML = `<p style="color: #94a3b8; text-align: center; padding: 20px;">No blogs created yet. Click "+ Add New Post" to create one!</p>`;
    return;
  }

  container.innerHTML = blogs.map(blog => `
    <div class="glass-card" style="padding: 18px; display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px;">
      <div>
        <span style="font-size: 0.8rem; color: #a855f7; font-weight: 600; text-transform: uppercase;">${blog.category || 'General'}</span>
        <h3 style="color: #fff; margin: 6px 0;">${blog.title}</h3>
        <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">By ${blog.author || user.name}</p>
      </div>
      <div style="display: flex; gap: 10px; align-items: center;">
        <a href="create-blog.html?edit=${blog._id}" style="background: #3b82f6; color: #fff; padding: 6px 14px; border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 500;">Edit</a>
        <button onclick="deleteBlog('${blog._id}')" style="background: #ef4444; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 500;">Delete</button>
      </div>
    </div>
  `).join('');
}

async function deleteBlog(id) {
  if (!confirm('Are you sure you want to delete this blog?')) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (res.ok) {
      fetchUserBlogs();
    } else {
      alert('Failed to delete blog. Please try again.');
    }
  } catch (error) {
    console.error('Error deleting blog:', error);
  }
}

// Global scope mapping for onclick HTML handlers
window.deleteBlog = deleteBlog;