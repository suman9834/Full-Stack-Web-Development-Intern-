const defaultBlogs = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    author: "Suman Kumar",
    content: "Learn the basics of HTML, CSS, and JavaScript to start building modern web applications...",
    status: "Published"
  },
  {
    id: 2,
    title: "Understanding Frontend Frameworks",
    author: "Jane Doe",
    content: "A complete beginner guide to understanding React, Vue, and modern JavaScript libraries...",
    status: "Published"
  }
];

function getBlogs() {
  const stored = localStorage.getItem('blogs');
  if (!stored) {
    localStorage.setItem('blogs', JSON.stringify(defaultBlogs));
    return defaultBlogs;
  }
  return JSON.parse(stored);
}

function saveBlogs(blogs) {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}
                                // Pages specific functions
document.addEventListener('DOMContentLoaded', () => {
                                // 1. Home Page: Load blogs dynamically
  const blogGrid = document.getElementById('home-blog-grid');
  if (blogGrid) {
    const blogs = getBlogs();
    blogGrid.innerHTML = blogs.map(blog => `
      <div class="blog-card">
        <h3>${blog.title}</h3>
        <p class="author">By ${blog.author}</p>
        <p>${blog.content}</p>
      </div>
    `).join('');
  }
                                  // 2. Create Blog Form Handling
  const createBlogForm = document.getElementById('create-blog-form');
  if (createBlogForm) {
    createBlogForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('blog-title').value;
      const content = document.getElementById('blog-content').value;

      const blogs = getBlogs();
      const newBlog = {
        id: Date.now(),
        title: title,
        author: "Suman Kumar",
        content: content,
        status: "Published"
      };

      blogs.push(newBlog);
      saveBlogs(blogs);

      alert('Blog Published Successfully!');
      window.location.href = 'dashboard.html';
    });
  }

                // 3. Dashboard Page: Render user blogs & Delete feature
  const dashboardGrid = document.getElementById('dashboard-blog-grid');
  if (dashboardGrid) {
    renderDashboard();
  }

                    // 4. Login & Register Forms Handling
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Login Successful!');
      window.location.href = 'dashboard.html';
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Registration Successful! Please Login.');
      window.location.href = 'login.html';
    });
  }
});

function renderDashboard() {
  const dashboardGrid = document.getElementById('dashboard-blog-grid');
  const blogs = getBlogs();
  
  if (blogs.length === 0) {
    dashboardGrid.innerHTML = '<p>No blogs created yet.</p>';
    return;
  }

  dashboardGrid.innerHTML = blogs.map(blog => `
    <div class="blog-card" id="blog-${blog.id}">
      <h3>${blog.title}</h3>
      <p class="status">Status: ${blog.status}</p>
      <div class="actions">
        <button class="btn-action delete" onclick="deleteBlog(${blog.id})">Delete</button>
      </div>
    </div>
  `).join('');
}

function deleteBlog(id) {
  if (confirm('Are you sure you want to delete this blog?')) {
    let blogs = getBlogs();
    blogs = blogs.filter(b => b.id !== id);
    saveBlogs(blogs);
    renderDashboard();
  }
}