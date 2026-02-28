# 🎀 Pookie Planner – Todo App

A full-stack Todo application built using **React (Vite)** for the frontend and **Express + MongoDB** for the backend.  
Users can add, delete, and mark tasks as completed with a cute and clean UI.

---

## ✨ Features

- ➕ Add new tasks  
- ✅ Mark tasks as completed  
- 🗑️ Delete tasks  
- 🔍 Filter tasks (All / Completed / Pending)  
- 🌸 Cute pastel UI  
- 🌐 REST API with Express  
- 💾 Data stored in MongoDB  

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- CSS

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

Frontend
```
src
├ components
│ ├ TodoForm.jsx
│ └ TodoList.jsx
├ App.jsx
├ main.jsx
└ App.css
```

Backend
```
backend
├ models
├ routes
├ index.js
└ package.json
```
## 🚀 How to Run Locally
### Start Backend

```
cd backend
npm install
npm start
```

### Start Frontend
```
cd frontend
npm install
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| GET    | /api/todos      | Get all todos         |
| POST   | /api/todos      | Add a new todo        |
| PUT    | /api/todos/:id  | Update a todo         |
| DELETE | /api/todos/:id  | Delete a todo         |
