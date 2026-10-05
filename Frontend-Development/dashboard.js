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

async function loadDashboardBlogs() {
  const listContainer = document.getElementById('dashboardBlogList');
  if (!listContainer) return;

  try {
    const res = await fetch(API_URL);
    const blogs = await res.json();

    if (!blogs.length) {
      listContainer.innerHTML = `<p style="color: #9ca3af; text-align: center;">No blogs created yet.</p>`;
      return;
    }

    listContainer.innerHTML = blogs.map(blog => `
      <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(15, 23, 42, 0.6); padding: 15px 20px; border-radius: 12px; border: 1px solid var(--card-border);">
        <div>
          <span style="font-size: 0.75rem; background: var(--accent-gradient); padding: 2px 8px; border-radius: 12px; color: #fff;">${blog.category || 'General'}</span>
          <h4 style="color: #fff; margin: 6px 0 2px 0;">${blog.title}</h4>
          <p style="color: #9ca3af; font-size: 0.85rem;">By ${blog.author}</p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button onclick="editBlog('${blog._id}')" style="background: rgba(99, 102, 241, 0.2); color: #818cf8; border: 1px solid #6366f1; padding: 6px 14px; border-radius: 8px; cursor: pointer;">Edit</button>
          <button onclick="deleteBlog('${blog._id}')" style="background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; padding: 6px 14px; border-radius: 8px; cursor: pointer;">Delete</button>
        </div>
      </div>
    `).join('');
  } catch (err) {
    showToast('Failed to fetch blogs');
  }
}

function editBlog(id) {
  window.location.href = `create-blog.html?edit=${id}`;
}

async function deleteBlog(id) {
  if (!confirm('Are you sure you want to delete this blog?')) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Blog deleted successfully');
      loadDashboardBlogs();
    } else {
      showToast('Error deleting blog');
    }
  } catch (err) {
    showToast('Network error');
  }
}

document.addEventListener('DOMContentLoaded', loadDashboardBlogs);