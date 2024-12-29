# ProApp
ProApp is a full-stack web application for managing tasks and projects efficiently with a user-friendly interface.

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

- **General User Features**
  - **Account Management**
    - Register with an email, password, and username
    - Secure login and logout using JWT
    - View and edit user profile (update avatar, view personal details like ID, username, email)
  - **Dashboard**
    - Manage personal projects and tasks (create, update, delete)
    - Search projects by name
    - Visualize statistics with **2 pie charts** (project statuses: Todo, In-Progress, Done and task statuses)
    - Real-time updates for projects and tasks
  - Responsive design for mobile and desktop
  
- **Admin Features**
  - **User Management**:
    - View all users in a sortable directory:
      - Sort by username, total projects, or project statuses (Todo, In-Progress, Done)
    - View user details (ID, username, email) and project statistics
    - Access individual user pages with detailed stats and **2 pie charts**
  - **Project and Task Management**:
    - Add, update, delete, and manage statuses for other users’ projects and tasks
    - Update project images
  - **Search and Filter**:
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

---

## Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/Nickk91/ProApp
   cd ProApp
```
2. **Install dependencies for both frontend and backend:**

# Backend setup
```bash
cd pro-app-backend
npm install
```

# Frontend setup 
```bash 
   cd ../client
   npm install
```



3. Create a .env file in the root of the pro-app-backend folder and add the following variables:

   # MongoDB Connection Strings
   MONGO_URI=your_mongodb_connection_string_for_development
   MONGO_URI_PROD=your_mongodb_connection_string_for_production

   # Server Configuration
   PORT=3000
   ENV="development"
   
   # Authentication
   ACCESS_TOKEN_SECRET=your_jwt_secret_key
   # URLs
   BACKEND_URL=your_backend_url_for_production
   PRODUCTION_FRONT_URL=your_frontend_url_for_production
   BASE_SERVER_URL=http://localhost
   CLIENT_PORT=5173

## **6. Usage**

### **Run the App Locally**
To run the app locally, open two terminals:

#### **Frontend**

1. Navigate to the frontend folder:
```bash
   cd client
```
2. Start the development server:
```bash
   npm run dev
```
3. The console should display a message similar to the following:
```
   VITE ready in [build time] ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help
```

#### **Backend**
1. Navigate to the backend folder:
    ```bash
   cd pro-app-backend
2. Start the server with file watching:
   node --watch server.js
3. The console should display the following if the backend server is running:
   Server is running on PORT 3000

You can now access the app at http://localhost:5173/ on your browser.

### **Visit the Live Demo**

1. Visit the live demo: [Live Demo](https://proappdevenv.netlify.app/)
2. To login as admin use the demo credentials: 
    - Email: mrcoffee@gmail.com
    - Password: secretPass30#

### **Registering a New Account**

1. Click on the Register button on the login page (you will be redirected there if logged out).

- **Login Screenshot**  
  
  ![Login](screenshots/login.png)

2. Fill in the registration form:
   - Step 1: Provide your email and create a password.
     - Password requirements:
       - 8–64 characters
       - At least one lowercase letter
       -  At least one digit
       - At least one special character (!@#$%^&*)
   
   - **Register Screenshot**  
     
     ![Register](screenshots/register.png)

   - Step 2: Choose a username.
     - Username requirements:
       - 15 characters or fewer
       - Only English letters, numbers, and underscores

   - **Signup Screenshot**  
     
     ![Signup](screenshots/signup.png)

3. Click Next to complete your registration.

4. If your registration was successful you will be redirected to a register success page.

   ![Register Success](screenshots/register_success.png)

5. After a 3 second countdown, you will be redirected to the login page.




## API Routes 

<!-- ## Screenshots

### Login Screenshot
![Login](screenshots/login.png) -->

<!-- ### **Dashboard**
![Dashboard](screenshots/dashboard.png)

### **Admin Panel**
![Admin Panel](screenshots/admin-panel.png) -->




