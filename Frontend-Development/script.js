const API_URL = 'http://localhost:5000/api/blogs';

// Default Sample Cards
const sampleBlogs = [
  {
    _id: "1",
    title: "Getting Started with Modern Frontend Development",
    author: "Suman Kumar",
    category: "Frontend",
    content: "Frontend development has evolved rapidly over the past few years. Modern frameworks like React, Vue, and Next.js allow developers to create blazing fast web applications with interactive user interfaces...",
    createdAt: "2026-10-01T10:00:00.000Z"
  },
  {
    _id: "2",
    title: "Building Scalable REST APIs with Node.js & Express",
    author: "Rahul Sharma",
    category: "Backend",
    content: "When designing backend services, scalability and efficiency are key. Node.js provides an asynchronous, event-driven runtime environment ideal for building lightweight and scalable web applications...",
    createdAt: "2026-10-03T14:30:00.000Z"
  },
  {
    _id: "3",
    title: "Mastering Glassmorphism & UI Design Trends",
    author: "Ananya Roy",
    category: "UI/UX",
    content: "Glassmorphism creates a sleek, semi-transparent frosted glass aesthetic using backdrop-filter blur effects. Learn how to combine colors, borders, and shadows to craft stunning modern interfaces...",
    createdAt: "2026-10-04T09:15:00.000Z"
  }
];

let allBlogs = [];
let activeCategory = 'All';

// DOM Elements
const blogContainer = document.getElementById('blogContainer');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const blogCountBadge = document.getElementById('blogCount');

// Initialize Particles Animation
if (window.tsParticles) {
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#8b5cf6" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 1.2, direction: "none", outModes: { default: "bounce" } },
      links: { enable: true, distance: 130, color: "#6366f1", opacity: 0.25, width: 1 }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } },
      modes: { grab: { distance: 140, links: { opacity: 0.7 } }, push: { quantity: 3 } }
    },
    detectRetina: true
  });
}

// Toast Alert System
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Redirect to Details Page
function openBlogDetails(id) {
  if (id) {
    window.location.href = `blog-details.html?id=${id}`;
  }
}

// Fetch Blogs from API or Fallback to Sample Data
async function fetchBlogs() {
  if (!blogContainer) return;
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("API Error");
    const data = await response.json();
    
    
    if (Array.isArray(data) && data.length > 0) {
      allBlogs = data;
    } else {
      allBlogs = sampleBlogs; // Backend empty or no blogs, fallback to sample data
    }
  } catch (error) {
    console.warn('Backend server unreachable or empty. Showing sample data.');
    allBlogs = sampleBlogs;
  }
  filterBlogs();
}

// Render Blog Cards UI
function renderBlogs(blogsList) {
  if (!blogContainer) return;
  
  if (blogCountBadge) blogCountBadge.innerText = `${blogsList.length} Blogs`;

  if (!blogsList.length) {
    blogContainer.innerHTML = `<p style="color: #9ca3af; grid-column: 1/-1; text-align: center;">No blogs match your filter criteria.</p>`;
    return;
  }

  blogContainer.innerHTML = blogsList.map(blog => {
    const wordCount = blog.content ? blog.content.split(' ').length : 0;
    const readTime = Math.ceil(wordCount / 100) || 1;
    const dateFormatted = blog.createdAt 
      ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : 'Oct 5, 2026';

    return `
      <div class="blog-card glass-card" onclick="openBlogDetails('${blog._id || blog.id}')">
        <div>
          <div class="card-header">
            <span class="category-badge">${blog.category || 'General'}</span>
            <div class="blog-meta">
              <span>⏱️ ${readTime} min read</span>
              <span>📅 ${dateFormatted}</span>
            </div>
          </div>
          <h3 class="blog-title">${blog.title}</h3>
          <p class="blog-author">⚡ By ${blog.author}</p>
          <p class="blog-excerpt">${blog.content ? blog.content.substring(0, 110) + '...' : ''}</p>
        </div>
      </div>
    `;
  }).join('');
}

// Filter Blogs Logic
function filterBlogs() {
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = allBlogs.filter(blog => {
    const blogCat = blog.category ? blog.category.toLowerCase().trim() : 'general';
    const activeCat = activeCategory.toLowerCase().trim();

    const matchesCat = (activeCat === 'all') || (blogCat === activeCat);
    
    const matchesQuery = 
      (blog.title && blog.title.toLowerCase().includes(query)) ||
      (blog.author && blog.author.toLowerCase().includes(query)) ||
      (blog.content && blog.content.toLowerCase().includes(query));

    return matchesCat && matchesQuery;
  });

  renderBlogs(filtered);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  fetchBlogs();

  if (searchInput) {
    searchInput.addEventListener('input', filterBlogs);
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.getAttribute('data-category') || 'All';
      showToast(`Filter applied: ${activeCategory}`);
      filterBlogs();
    });
  });
});