const API_URL = 'http://localhost:5000/api/blogs';

const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

if (!token || !user) {
  window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const userInfo = document.getElementById('userInfo');
  if (userInfo) userInfo.innerText = `Welcome, ${user.name}`;

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

  if (blogs.length === 0) {
    container.innerHTML = `<p style="color: #94a3b8; text-align: center;">No blogs created yet.</p>`;
    return;
  }

  container.innerHTML = blogs.map(blog => `
    <div class="glass-card" style="padding: 15px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <span style="font-size: 0.8rem; color: #a855f7;">${blog.category}</span>
        <h3 style="color: #fff; margin: 4px 0;">${blog.title}</h3>
        <p style="color: #94a3b8; font-size: 0.85rem;">By ${blog.author}</p>
      </div>
      <div>
        <a href="create-blog.html?edit=${blog._id}" class="btn-edit" style="margin-right: 8px;">Edit</a>
        <button onclick="deleteBlog('${blog._id}')" class="btn-delete">Delete</button>
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

    if (res.ok) fetchUserBlogs();
  } catch (error) {
    console.error('Error deleting blog:', error);
  }
}