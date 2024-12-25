# ProApp
ProApp is a full-stack web application for managing tasks and projects efficiently with a user-friendly interface

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- General User Features
 - Account Management:
  - Register with an email, password, and username
  - Secure login and logout using JWT
  - View and edit user profile:
   - Update avatar
   - View personal details (ID, username, email)

 - Dashboard:
  - Manage personal projects and tasks:
   - Create, update, and delete
   - Search projects by name
  - Visualize statistics with 2 pie charts:
   - Project statuses (Todo, In-Progress, Done)
   - Task statuses
  - Real-time updates for projects and tasks
- Responsive design for mobile and desktop
  
- Admin Features
 - User Management:
  - View all users in a sortable directory:
   - Sort by username, total projects, or project statuses  - (Todo, In-Progress, Done)
  - View user details (ID, username, email) and project  - statistics
  - Access individual user pages with detailed stats and 2  pie charts
 - Project and Task Management:
  - Add, update, delete, and manage statuses for other users’  - projects and tasks
  - Update project images
 - Search and Filter:
  - Search projects by owner’s username

## Tech Stack

**Frontend:** 
- Framework/Library: React
- State Management: Redux Toolkit (@reduxjs/toolkit), React-Redux
- Routing: React Router DOM
- HTTP Requests: Axios
- Charts/Graphs: Recharts
- Styling: Styled Components
- SEO Management: React Helmet
- Icons: React Icons  

**Backend:**
- Server Framework: Express
- Database: MongoDB (with Mongoose for object data modeling)
- Authentication: JSON Web Tokens (JWT), bcryptjs for password hashing
- Environment Variables: dotenv
- Security:
 - CORS for cross-origin resource sharing
 - MongoDB data sanitization with express-mongo-sanitize and mongo-sanitize
 - Input sanitization with sanitize-html
- Error Handling: express-async-handler



**Deployment:** 
- Frontend: Netlify
- Backend: Render.com
- Module Bundler: Vite (Frontend)
- Linting: ESLint (with React and React Hooks plugins)
- React DOM
- Hot Reloading: Vite React Plugin

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/project-name.git
   cd project-name