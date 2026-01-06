# React.js & Tailwind CSS Project - Week 3 Assignment

## 📋 Project Overview

This is a complete React application built as part of a Week 3 assignment to master front-end development concepts. The project demonstrates practical implementation of React.js, JSX, and Tailwind CSS through a fully functional task management application with API integration.

## 🎯 What This Project Does

This application is a **multi-page web app** that allows users to:

1. **Manage Tasks** - Create, complete, and delete tasks with local storage persistence
2. **Browse API Data** - View user data fetched from JSONPlaceholder API with search and pagination
3. **Switch Themes** - Toggle between dark and light mode with persistent preferences
4. **Navigate Pages** - Browse different sections using React Router

## 🏗️ Core Architecture

### Application Structure
```
App.jsx (Main Router)
├── Home Page (Landing page with feature overview)
├── Task Manager (Full CRUD operations for tasks)
├── API Data Page (External API integration)
└── About Page (Project documentation)
```


### Key Technical Implementations

#### 1. Component System
- **UI Components**: Reusable Button, Card, Modal components
- **Layout Components**: Navbar, Footer, Layout wrappers
- **Business Components**: TaskItem for task management

#### 2. State Management
- **useState**: Component-level state (tasks, filters, form inputs)
- **useContext**: Global theme management across entire app
- **Custom Hooks**: useLocalStorage, useApi for reusable logic

#### 3. Data Flow
User Interaction → State Update → UI Re-render → LocalStorage Persistence


## 🎮 How to Use the Application

### Task Manager (`/tasks`)
1. **Add Tasks**: Click "Add Task" button, enter description, save
2. **Complete Tasks**: Check the checkbox to mark as done
3. **Filter Tasks**: Use "All/Active/Completed" buttons to filter
4. **Delete Tasks**: Click "Delete" button on any task
5. **View Stats**: See total, completed, and active task counts

### API Data Page (`/api-data`)
1. **Browse Users**: View list of users from JSONPlaceholder API
2. **Search**: Use search box to filter users by name or email
3. **Pagination**: Navigate through user pages (10 users per page)
4. **Error Handling**: See error messages if API fails

### Theme System
- Click the moon/sun icon in navbar to toggle themes
- Preference saves automatically
- All components adapt to current theme

## 🔧 Technical Features Demonstrated

### React Concepts
- **Functional Components**: All components use modern React syntax
- **Hooks**: useState, useEffect, useContext, custom hooks
- **Props**: Component communication and customization
- **Event Handling**: User interactions and form submissions

### State Management
   ```javascript
   // Component State
   const [tasks, setTasks] = useState([])
   const [filter, setFilter] = useState('all')

   // Global State (Theme)
   const { isDark, toggleTheme } = useContext(ThemeContext)

   // Custom Hook State
   const { data, loading, error } = useApi('https://api.example.com/users')
   ```

### API Integration

- Data Fetching: HTTP requests using Fetch API

- Loading States: Visual feedback during API calls

- Error Handling: User-friendly error messages

- Data Transformation: Processing and filtering API responses

### Styling & UI/UX
- Responsive Design: Works on mobile, tablet, desktop

- Dark Mode: Complete theme system with Tailwind

- Animations: Smooth transitions and hover effects

- Accessibility: Proper ARIA labels and semantic HTML

## 🚀 Getting Started
### Prerequisites

- Node.js 14+

- npm or yarn

### Installation

Clone or download the project
```bash
cd react-tailwind-app
```
   
Install dependencies
```bash
npm install
```

Start development server
```bash
npm run dev
```

### Open http://localhost:5173 in your browser