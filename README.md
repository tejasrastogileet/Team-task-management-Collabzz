# Team Task Manager API

A simple REST API built using **Node.js, Express, and MongoDB** for managing team tasks with authentication.

This project was built as part of a **Backend Developer Intern screening task**.

---

## Features

- JWT Authentication (Register & Login)
- Secure password hashing using bcrypt
- Create, Read, Update, Delete (CRUD) tasks
- Protected routes using middleware
- Pagination support
- Search tasks by title
- Filter tasks by status
- Role-based access control (Admin/User)

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for password hashing

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/team-task-manager.git
cd team-task-manager
2. Install dependencies
npm install
3. Create .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
4. Run the server
npm run dev

Server will run at:

http://localhost:5000
API Routes
Authentication
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login and receive JWT token
Tasks
Method	Endpoint	Description
POST	/tasks	Create a task
GET	/tasks	Get all tasks
GET	/tasks/:id	Get task by ID
PUT	/tasks/:id	Update task
DELETE	/tasks/:id	Delete task
Query Examples

Pagination:

GET /tasks?page=1&limit=5

Search tasks:

GET /tasks?search=meeting

Filter by status:

GET /tasks?status=todo
Testing

You can test the API using Postman.
A Postman collection file is included in this repository.

postman_collection.json
Author

Tejas Rastogi
