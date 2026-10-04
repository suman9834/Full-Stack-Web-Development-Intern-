# 📝 Frontend-Development — DevBlog

A responsive and interactive **Blog Application frontend** built with **HTML5**, **CSS3**, and **vanilla JavaScript (ES6)**. This project is developed for **Module 1 (Frontend Development)** of the **Full Stack Web Development Internship**.

All data is stored in the browser using **LocalStorage**, so no backend or database is required to run it.

---

## 🌟 Features

- 📱 **Fully Responsive Design** — works smoothly on desktop, tablet, and mobile screens.
- 🎨 **Clean & Modern UI** — simple navigation bar, card-based grid layout, and styled forms.
- 💾 **LocalStorage Persistence** — blogs you create or delete are saved in your browser and remain after a page refresh.
- ⚡ **Dynamic Rendering** — blog cards are generated using JavaScript DOM manipulation.
- 🗑️ **Delete with Confirmation** — remove a blog from the dashboard after a confirm prompt.
- 🔐 **Login & Register Pages** — authentication UI with form validation (simulated, frontend only).

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Displays all published blogs in a card grid |
| Login | `login.html` | User login form |
| Register | `register.html` | New user registration form |
| Dashboard | `dashboard.html` | View and delete your blogs |
| Create Blog | `create-blog.html` | Form to write and publish a new blog |

---

## 🛠️ Tech Stack

- **HTML5** — page structure and semantic markup
- **CSS3** — Flexbox, CSS Grid, responsive layout
- **JavaScript (ES6)** — DOM manipulation, event handling, template literals
- **LocalStorage API** — client-side data persistence

---

## 📁 Project Structure

```text
Frontend-Development/
│
├── index.html          # Home page (displays all blogs)
├── login.html          # Login page
├── register.html       # User registration page
├── dashboard.html      # User dashboard (manage blogs)
├── create-blog.html    # Create blog form
├── style.css           # Global stylesheet
├── script.js           # DOM manipulation & LocalStorage logic
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

No installation or build step is needed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/suman9834/Frontend-Development.git
   ```
2. **Open the project folder**
   ```bash
   cd Frontend-Development
   ```
3. **Run it**
   - Double-click `index.html` to open it in your browser, **or**
   - Use the **Live Server** extension in VS Code (right-click `index.html` → *Open with Live Server*).

---

## ⚙️ How It Works

1. On first load, `script.js` stores two sample blogs in LocalStorage under the key `blogs`.
2. **Home page** reads the blogs from LocalStorage and renders them as cards.
3. **Create Blog** form adds a new blog object (`id`, `title`, `author`, `content`, `status`) to LocalStorage and redirects to the dashboard.
4. **Dashboard** lists all blogs and lets you delete any of them; the list updates instantly.
5. **Login / Register** forms show a success alert and redirect to the next page (no real authentication yet).

---

## 🔮 Future Improvements

- Connect to a real backend (Node.js / Express or similar) with a database
- Real user authentication (JWT / sessions)
- Edit blog feature
- Show only the logged-in user's blogs on the dashboard
- Search and category filters
- Sanitize user input before rendering to prevent XSS

---

## 👨‍💻 Author

**Suman Kumar**

- GitHub: [@suman9834](https://github.com/suman9834)

---

⭐ If you like this project, consider giving it a star!
