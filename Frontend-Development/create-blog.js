const API_URL = 'http://localhost:5000/api/blogs';
const token = localStorage.getItem('token');

if (!token) {
  window.location.href = 'login.html';
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
    document.getElementById('category').value = blog.category;
    document.getElementById('content').value = blog.content;
  } catch (err) {
    console.error(err);
  }
}

document.getElementById('blogForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = document.getElementById('blogId').value;
  const blogData = {
    title: document.getElementById('title').value.trim(),
    category: document.getElementById('category').value,
    content: document.getElementById('content').value.trim()
  };

  const url = id ? `${API_URL}/${id}` : API_URL;
  const method = id ? 'PUT' : 'POST';

  const res = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(blogData)
  });

  if (res.ok) {
    window.location.href = 'dashboard.html';
  } else {
    const data = await res.json();
    alert(data.message || 'Error saving blog');
  }
});