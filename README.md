# 🚀 DevBlog - Full-Stack Blogging Platform

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

DevBlog is a modern, responsive, full-stack blogging platform built with **Node.js, Express.js, MongoDB Atlas** and a **vanilla JavaScript** frontend. Users can register, log in, and create, edit, delete and explore tech articles from a personal dashboard.

---

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [Features](#-features)
- [Development Modules](#-development-modules-task-1-to-6)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Local Installation & Setup](#-local-installation--setup)
- [API Endpoints](#-api-endpoints)
- [Author](#-author)

---

## 🌐 Live Demo

| Service  | Platform | Link                              |
| -------- | -------- | --------------------------------- |
| Frontend | Vercel   | [full-stack-web-development-intern.vercel.app](https://full-stack-web-development-intern.vercel.app/) |
| Backend  | Render   | [full-stack-web-development-intern.onrender.com](https://full-stack-web-development-intern.onrender.com/api/blogs) |

> The backend runs on Render's free tier, so the first request after inactivity may take 30-60 seconds to respond.

---

## ✨ Features

- 🔐 **Authentication**: User registration and login with Bcrypt password hashing.
- 🔑 **JWT Protection**: Secure, token-based access to protected routes.
- 📊 **Personal Dashboard**: View, edit and delete your own blogs in one place.
- 📝 **Full CRUD**: Create, read, update and delete blog articles.
- 🎨 **Glassmorphism UI**: Clean, modern design with particle animations and toast alerts.
- 📱 **Responsive Layout**: Optimized for mobile, tablet and desktop screens.

---

## 🧩 Development Modules (Task 1 to 6)

### 🔹 Module 1: Project & Environment Setup
- Initialized the Node.js environment and project folder structure.
- Configured environment variables using `.env`.
- Connected the Express backend to **MongoDB Atlas** using Mongoose.

### 🔹 Module 2: Authentication & User Management
- User registration and login functionality.
- Password hashing using **bcryptjs**.
- Secure authentication flow using **JSON Web Tokens (JWT)**.
- Protected client-side routes for authenticated users.

### 🔹 Module 3: Blog CRUD API
- **Create**: Write and publish blogs (`POST /api/blogs`).
- **Read**: Fetch all public articles (`GET /api/blogs`) and user-specific blogs (`GET /api/blogs/user`).
- **Update**: Edit existing articles (`PUT /api/blogs/:id`).
- **Delete**: Remove articles (`DELETE /api/blogs/:id`).

### 🔹 Module 4: Frontend UI & Interactive Dashboard
- Glassmorphism UI styled with custom CSS and Google Fonts.
- Responsive design for mobile, tablet and desktop viewports.
- Dynamic DOM manipulation using vanilla JavaScript.
- Dashboard for managing articles with real-time status updates.

### 🔹 Module 5: Frontend & Backend Integration
- Integrated client-side `fetch` API calls with backend routes.
- Used `localStorage` to persist JWT authentication tokens.
- Dynamic inline action handlers for editing and deleting posts.

### 🔹 Module 6: Final Polish, Optimization & Deployment
- Added particle animations (`tsparticles-slim`) and toast alerts for better UX.
- Deployed the backend API on **Render**.
- Deployed the frontend client on **Vercel**.

---

## 🛠️ Tech Stack

| Layer          | Technologies                                   |
| -------------- | ---------------------------------------------- |
| Frontend       | HTML5, CSS3 (Glassmorphism), JavaScript (ES6+), tsParticles |
| Backend        | Node.js, Express.js                            |
| Database       | MongoDB Atlas (Mongoose ODM)                   |
| Authentication | JWT (JSON Web Tokens), Bcryptjs                |
| Deployment     | Render (Backend), Vercel (Frontend)            |

---

## 📁 Project Structure

```text
Full-Stack-Web-Development-Intern/
├── backend/
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   ├── Blog.js            # Blog schema
│   │   └── User.js            # User schema
│   ├── .env                   # Environment variables (not committed)
│   ├── package.json
│   └── server.js              # Express server entry point
├── Frontend-Development/
│   ├── index.html             # Public landing page
│   ├── login.html             # Login page
│   ├── register.html          # Registration page
│   ├── dashboard.html         # Protected user dashboard
│   ├── dashboard.js           # Dashboard logic
│   ├── create-blog.html       # Article creation page
│   ├── create-blog.js         # Article creation logic
│   ├── script.js              # Main frontend logic
│   └── style.css              # Styling & animations
└── README.md
```

---

## ⚡ Local Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection string

### 1. Clone the Repository

```bash
git clone https://github.com/suman9834/Full-Stack-Web-Development-Intern.git
cd Full-Stack-Web-Development-Intern
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

> ⚠️ Never commit your `.env` file. Make sure it is listed in `.gitignore`.

Run the backend server:

```bash
npm run dev
```

The API will be available at `http://localhost:5000`.

### 3. Setup the Frontend

Open `Frontend-Development/index.html` with **VS Code Live Server**, or launch the file directly in your browser.

---

## 🔗 API Endpoints

| Method | Endpoint             | Description                      | Auth Required |
| ------ | -------------------- | -------------------------------- | :-----------: |
| POST   | `/api/auth/register` | Register a new user              |      No       |
| POST   | `/api/auth/login`    | Authenticate user & get token    |      No       |
| GET    | `/api/blogs`         | Fetch all blogs                  |      No       |
| GET    | `/api/blogs/user`    | Fetch logged-in user's blogs     |      Yes      |
| POST   | `/api/blogs`         | Create a new blog post           |      Yes      |
| PUT    | `/api/blogs/:id`     | Update an existing blog post     |      Yes      |
| DELETE | `/api/blogs/:id`     | Delete a blog post               |      Yes      |

Protected routes expect the JWT in the request header:

```http
Authorization: Bearer <your_token>
```

---

## 👤 Author

**Suman Kumar**
GitHub: [@suman9834](https://github.com/suman9834)