import "./App.css";
import Counter from "./components/Counter/Counter.jsx";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoggedOutPage from "./pages/LoggedOutPage/LoggedOutPage.jsx";
import SignupPage from "./pages/SignUp/SignupPage.jsx";
import AddProjectPage from "./pages/AddProjectPage/AddProjectPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import AddTaskPage from "./pages/AddTaskProjectPage/AddTaskPage.jsx";
import EditTaskPage from "./pages/EditTaskPage.jsx/EditTaskPage.jsx";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes.jsx";
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* <h1>{import.meta.env.VITE_BASEURL}</h1> */}
      <Routes>
        {/* Private routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/addproject" element={<AddProjectPage />} />
          <Route path="/addtask" element={<AddTaskPage />} />
          <Route path="/edit-task" element={<EditTaskPage />} />
        </Route>

        {/* Public routes */}
        <Route
          path="/authtest"
          element={<ProtectedRoute Page={AddTaskPage} typeOfUser={1} />}
        />
        <Route path="/loggedout" element={<LoggedOutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
