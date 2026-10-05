# 🚀 DevBlog — Full-Stack Blogging Platform

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

**DevBlog** is a modern, responsive, full-stack blogging platform built with **Node.js, Express.js, MongoDB Atlas, and Vanilla JavaScript**.

The platform allows users to register, securely log in, create and manage blog articles, and explore published tech content through a clean and responsive interface.

---

## 🌐 Live Demo

| Service | Platform | Link |
|---|---|---|
| 🌍 Frontend | Vercel | [Open DevBlog](https://full-stack-web-development-intern.vercel.app/) |
| ⚙️ Backend API | Render | [View API](https://full-stack-web-development-intern.onrender.com/api/blogs) |

> **Note:** The backend is deployed on Render's free tier. After a period of inactivity, the first request may take approximately **30–60 seconds** while the server wakes up.

---

## ✨ Features

- 🔐 **User Authentication** — Register and login securely.
- 🔒 **Password Security** — Passwords are hashed using `bcryptjs`.
- 🔑 **JWT Authentication** — Protected routes using JSON Web Tokens.
- 📝 **Create Blogs** — Authenticated users can publish new articles.
- 📖 **Read Blogs** — Browse publicly available blog posts.
- ✏️ **Edit Blogs** — Users can update their own articles.
- 🗑️ **Delete Blogs** — Users can remove their own articles.
- 📊 **Personal Dashboard** — Manage all personal blog posts from one place.
- 🎨 **Glassmorphism UI** — Modern interface with animated visual effects.
- ✨ **Particle Animations** — Interactive background using `tsParticles`.
- 🔔 **Toast Notifications** — User-friendly success and error feedback.
- 📱 **Responsive Design** — Works across mobile, tablet, and desktop devices.

---

## 🧩 Development Modules

The project was developed progressively through **six development modules**.

### 🔹 Module 1 — Project & Environment Setup

- Initialized the Node.js project.
- Created the backend and frontend project structure.
- Configured environment variables using `.env`.
- Connected the Express.js server to **MongoDB Atlas**.
- Configured **Mongoose** for database interaction.

### 🔹 Module 2 — Authentication & User Management

- Implemented user registration.
- Implemented secure user login.
- Added password hashing using `bcryptjs`.
- Implemented JWT-based authentication.
- Added authentication middleware for protected routes.
- Stored the authentication token on the client side.

### 🔹 Module 3 — Blog CRUD API

Implemented complete CRUD functionality for blog articles.

- **Create** — `POST /api/blogs`
- **Read** — `GET /api/blogs`
- **Read User Blogs** — `GET /api/blogs/user`
- **Update** — `PUT /api/blogs/:id`
- **Delete** — `DELETE /api/blogs/:id`

### 🔹 Module 4 — Frontend UI & Interactive Dashboard

- Designed a modern glassmorphism interface.
- Added responsive layouts.
- Implemented dynamic DOM manipulation with Vanilla JavaScript.
- Created login and registration interfaces.
- Created a personal dashboard.
- Added real-time UI status updates.
- Added animated visual effects.

### 🔹 Module 5 — Frontend & Backend Integration

- Connected the frontend with the Express.js REST API.
- Implemented client-side `fetch()` requests.
- Integrated JWT authentication with API requests.
- Used `localStorage` for token persistence.
- Added dynamic edit and delete actions.
- Connected dashboard data with the backend database.

### 🔹 Module 6 — Final Polish, Optimization & Deployment

- Added `tsParticles` for animated backgrounds.
- Added toast notifications for better user experience.
- Improved responsive design.
- Connected frontend and backend production environments.
- Deployed the backend API to **Render**.
- Deployed the frontend application to **Vercel**.
- Performed final testing and UI polishing.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| 🎨 Frontend | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| ✨ UI & Animation | CSS Glassmorphism, tsParticles, Google Fonts |
| ⚙️ Backend | Node.js, Express.js |
| 🗄️ Database | MongoDB Atlas, Mongoose |
| 🔐 Authentication | JWT, bcryptjs |
| 🌍 Frontend Deployment | Vercel |
| 🚀 Backend Deployment | Render |
| 🔧 Development Tools | VS Code, Git, GitHub |

---

## 📁 Project Structure

```text
Full-Stack-Web-Development-Intern/
│
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── Blog.js
│   │   └── User.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── Frontend-Development/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── dashboard.js
│   ├── create-blog.html
│   ├── create-blog.js
│   ├── script.js
│   └── style.css
│
├── .gitignore
└── README.md
```

---

## ⚡ Local Installation & Setup

### Prerequisites

Before running the project locally, make sure you have:

- [Node.js](https://nodejs.org/) installed.
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account.
- Git installed.
- VS Code recommended.

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/suman9834/Full-Stack-Web-Development-Intern.git
```

Navigate into the project:

```bash
cd Full-Stack-Web-Development-Intern
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### ⚠️ Security Notice

**Never commit your `.env` file to GitHub.**

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
```

---

### 4️⃣ Start the Backend

Run the development server:

```bash
npm run dev
```

The backend API will be available at:

```text
http://localhost:5000
```

---

### 5️⃣ Run the Frontend

Open the following directory:

```text
Frontend-Development/
```

You can run the frontend using **VS Code Live Server**.

Alternatively, open `index.html` directly in your browser.

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint | Description | Authentication |
|---|---|---|:---:|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Login and receive JWT | ❌ |

### Blog

| Method | Endpoint | Description | Authentication |
|---|---|---|:---:|
| `GET` | `/api/blogs` | Fetch all public blogs | ❌ |
| `GET` | `/api/blogs/user` | Fetch logged-in user's blogs | ✅ |
| `POST` | `/api/blogs` | Create a new blog | ✅ |
| `PUT` | `/api/blogs/:id` | Update an existing blog | ✅ |
| `DELETE` | `/api/blogs/:id` | Delete a blog | ✅ |

---

## 🔑 Authentication

Protected endpoints require a valid JWT in the request header.

```http
Authorization: Bearer <your_token>
```

The backend validates the token using authentication middleware before allowing access to protected resources.

---

## 🔄 Application Flow

```text
User
 │
 ▼
Frontend
 │
 ├── Register / Login
 │
 ▼
Express.js API
 │
 ├── JWT Authentication
 │
 ├── Blog CRUD Operations
 │
 ▼
MongoDB Atlas
 │
 ▼
API Response
 │
 ▼
Frontend Dashboard
```

---

## 🎯 Project Highlights

This project demonstrates practical experience with:

- Full-stack web application development
- REST API development
- Authentication & authorization
- JWT-based security
- Password hashing
- MongoDB database integration
- CRUD operations
- Frontend-backend integration
- Responsive UI development
- Git & GitHub workflow
- Cloud deployment
- Vercel & Render deployment

---

## 🚀 Future Improvements

Potential future enhancements include:

- 💬 Blog comments
- ❤️ Like and bookmark functionality
- 🔎 Advanced blog search
- 🏷️ Categories and tags
- 👤 User profile pages
- 🖼️ Image upload support
- 🌙 Dark/light theme switcher
- 📧 Email verification
- 🔐 Refresh-token authentication
- 📈 Admin analytics dashboard

---

## 👨‍💻 Author

### Suman Kumar

**B.Tech CSE (AI & Data Science) Student | Full-Stack Developer | ML Enthusiast**

🔗 **GitHub:** [@suman9834](https://github.com/suman9834)

---

## ⭐ Show Your Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with ❤️ by <strong>Suman Kumar</strong>
</p>