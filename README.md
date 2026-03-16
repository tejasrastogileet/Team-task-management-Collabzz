# Team Task Manager API

Backend API built using Node.js, Express, and MongoDB.

## Features

Authentication using JWT  
Task CRUD operations  
Password hashing using bcrypt  
Pagination  
Search tasks by title  
Status filtering  
Role based access control  

## Installation

Clone repo

npm install

Create .env file

MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_secret

Run server

npm run dev

Server runs at

http://localhost:5000

## Routes

POST /auth/register  
POST /auth/login  

POST /tasks  
GET /tasks  
GET /tasks/:id  
PUT /tasks/:id  
DELETE /tasks/:id  

## Example Queries

/tasks?page=1&limit=5  
/tasks?search=meeting  
/tasks?status=todo