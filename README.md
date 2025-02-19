# IRCTC Railway Management System

This is a **full-stack railway reservation system** built using **React** for the frontend and **Node.js/Express with MySQL** for the backend. The system allows users to **search for trains, book tickets, and manage train schedules** with concurrency handling to prevent race conditions.

## 🚀 Features
- **User Authentication** (Signup/Login)
- **Train Management** (Add, Update, Delete Trains)
- **Seat Availability & Booking System**
- **Concurrency Handling** (Preventing double booking issues)
- **Admin Panel** (For adding new trains)
- **Middleware for Security & Authentication**

## 🏗️ Tech Stack
### Frontend:
- **React.js** (with TailwindCSS for styling)
- React Router (for navigation)
- Axios (for API calls)

### Backend:
- **Node.js with Express.js**
- **MySql/Postgress** (Database)
- Sequelize ORM (for database interaction)
- JSON Web Tokens (JWT) for authentication
- Middleware for security (CORS, Helmet)

## 📂 Project Structure
📦 railway-management-system ┣ 📂 frontend/ # React app ┃ ┣ 📂 src/ ┃ ┃ ┣ 📂 components/ ┃ ┃ ┣ 📂 pages/ ┃ ┃ ┣ 📜 App.js ┃ ┃ ┣ 📜 index.js ┃ ┗ 📜 package.json ┣ 📂 backend/ # Node.js API ┃ ┣ 📂 routes/ ┃ ┣ 📂 controllers/ ┃ ┣ 📂 models/ ┃ ┣ 📜 server.js ┃ ┣ 📜 config.js ┃ ┗ 📜 package.json ┗ 📜 README.md


## 🛠️ How to Run the Project

### 1️⃣ Setup Backend
```sh
cd backend
npm install
node server.js

cd frontend
npm install
npm start
