# Student Management System - Frontend

React frontend for a full-stack Student Management System.

The application communicates with an ASP.NET Core Web API backend using Axios and provides authentication, role-based UI access, student CRUD operations, registration-number based search, and protected routes.

## 🚀 Features

- User Login
- JWT Authentication
- Session-based token storage
- Role-based UI
- Protected Routes
- Student Listing
- Search by Registration Number
- Add Student
- Edit Student
- Delete Student
- Loading States
- Error Handling
- Logout
- Bootstrap UI
- Axios API Integration
- React Router Navigation

## 🛠️ Technologies Used

- React
- JavaScript
- Vite
- Axios
- React Router
- Bootstrap
- jwt-decode

## 🏗️ Project Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│   └── ProtectedLayout.jsx
│
├── pages
│   ├── Login.jsx
│   ├── Students.jsx
│   ├── AddStudent.jsx
│   └── EditStudent.jsx
│
├── services
│   ├── authService.js
│   └── studentService.js
│
├── App.jsx
└── main.jsx
```

## 🔄 Application Flow

```text
User
 ↓
React Login
 ↓
Axios
 ↓
ASP.NET Core API
 ↓
JWT
 ↓
sessionStorage
 ↓
Protected Routes
 ↓
Student Management
```

## 🔐 Authentication

The frontend authenticates users through the ASP.NET Core Web API.

After successful login:

```text
Username + Password
       ↓
POST /api/auth/login
       ↓
JWT received
       ↓
sessionStorage
```

The token is stored using:

```javascript
sessionStorage.setItem("token", token);
```

The token is then included in protected API requests:

```http
Authorization: Bearer <JWT>
```

The token is stored in `sessionStorage`, so it is removed when the browser tab/session is closed.

## 👥 Role-Based UI

The application supports three roles:

- Admin
- Teacher
- Student

| Feature | Admin | Teacher | Student |
|:---|:---:|:---:|:---:|
| View Students | ✅ | ✅ | ✅ |
| Search | ✅ | ✅ | ✅ |
| Add Student | ✅ | ❌ | ❌ |
| Edit Student | ✅ | ✅ | ❌ |
| Delete Student | ✅ | ❌ | ❌ |

The frontend hides actions that the current user is not permitted to perform.

> Frontend restrictions are only for the user interface. Actual authorization is enforced by the ASP.NET Core API.

## 🛡️ Protected Routes

React Router is used to protect authenticated pages.

```text
/login
    ↓
Public

/students
    ↓
Protected

/students/add
    ↓
Protected

/students/edit/:registrationNumber
    ↓
Protected
```

If there is no JWT in `sessionStorage`, the user is redirected to:

```text
/login
```

## 🔎 Student Search

Students can be searched using their Registration Number.

Example:

```text
12204005
```

The frontend sends:

```http
GET /api/students/12204005
```

The search result displays:

- Registration Number
- Name
- Course
- Age
- Email

Role-specific actions are also available in the search result.

```text
Admin
→ Edit + Delete

Teacher
→ Edit

Student
→ View only
```

## ➕ Add Student

Admins can add new students.

The form collects:

```text
Registration Number
Name
Course
Age
Email
```

The `Id` field is not entered because it is generated automatically by SQL Server.

The frontend sends:

```http
POST /api/students
```

## ✏️ Edit Student

Admins and Teachers can edit student information.

The registration number is passed through the route:

```text
/students/edit/:registrationNumber
```

Example:

```text
/students/edit/12204005
```

React Router's `useParams()` is used to retrieve the registration number.

The existing student is loaded through:

```http
GET /api/students/{registrationNumber}
```

After editing:

```http
PUT /api/students/{registrationNumber}
```

## 🗑️ Delete Student

Only Admin users can delete students.

Before deletion, the application asks for confirmation.

The API request is:

```http
DELETE /api/students/{registrationNumber}
```

After successful deletion, the React state is updated so the student disappears from the table without requiring a full page refresh.

## 🌐 Backend API

The frontend communicates with the ASP.NET Core backend.

Development API URL:

```text
https://localhost:7009
```

Example:

```text
https://localhost:7009/api/students
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_FRONTEND_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd StudentManagement
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The React application runs at:

```text
http://localhost:5173
```

The root route:

```text
/
```

automatically redirects to:

```text
/login
```

## 📦 Main Dependencies

```bash
npm install axios
npm install react-router-dom
npm install bootstrap
npm install jwt-decode
```

## 🔗 Backend Integration

This repository works together with the ASP.NET Core Web API backend.

```text
┌──────────────────────────┐
│      React Frontend      │
│                          │
│ React Router             │
│ Axios                    │
│ Bootstrap                │
└────────────┬─────────────┘
             │
             │ HTTP / JWT
             ▼
┌──────────────────────────┐
│ ASP.NET Core Web API     │
│                          │
│ Controllers              │
│ Services                 │
│ Repository               │
│ Entity Framework Core    │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│       SQL Server         │
└──────────────────────────┘
```

## 📚 Learning Outcomes

This project provided practical experience with:

- React fundamentals
- Components
- JSX
- `useState`
- `useEffect`
- Forms
- Event handling
- React Router
- Dynamic routes
- `useParams`
- `useNavigate`
- Axios
- API integration
- JWT authentication
- Role-based UI
- Protected routes
- Session storage
- CRUD operations
- Loading and error handling
- Bootstrap

## 👨‍💻 Author

**Mukul Deshwal**

Computer Science & Engineering
