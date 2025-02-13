import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoggedOutPage from "./pages/LoggedOutPage/LoggedOutPage.jsx";
import SignupPage from "./pages/SignUp/SignupPage.jsx";
import AddProjectPage from "./pages/AddProjectPage/AddProjectPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import AddTaskPage from "./pages/AddTaskPage/AddTaskPage.jsx";
import EditTaskPage from "./pages/EditTaskPage.jsx/EditTaskPage.jsx";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes.jsx";
import { userAuthLevels } from "./constants/userAuthLevels.js";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";
import MyProjects from "./pages/MyProjects/MyProjects.jsx";
import Userpage from "./pages/UserPage/Userpage.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import UsersPage from "./pages/UsersPage/UsersPage.jsx";
import RegisteredSuccessPage from "./pages/RegisteredSuccessPage/RegisteredSuccessPage.jsx";
import FooterMenu from "./components/FooterMenu/FooterMenu.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage/UnauthorizedPage.jsx";
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeAuth, setLoading } from "./slices/authSlice.js";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(
        initializeAuth({
          isLoggedIn: true,
          user: storedUser,
        })
      );
    } else {
      dispatch(setLoading(false));
    }
  }, [dispatch]);
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

      <Routes>
        {/* Private routes (Authenticated routes where FooterMenu appears) */}
        <Route
          element={<PrivateRoutes authLevel={userAuthLevels.regularUser} />}
        >
          <Route
            path="/noprojects"
            element={
              <>
                <HomePage />
                <FooterMenu />
              </>
            }
          />
          <Route path="/projects/search" element={<SearchPage />} />
          {/* FooterMenu rendered here for logged-in users */}
          <Route
            path="/"
            element={
              <>
                <MyProjects />
                <FooterMenu />
              </>
            }
          />

          <Route
            path="/projects/:projectId/edit-task/:taskId"
            element={<EditTaskPage />}
          />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route
            path="/addproject"
            element={
              <>
                <AddProjectPage />
                <FooterMenu />
              </>
            }
          />
          <Route
            path="/userpage/:userId"
            element={
              <>
                <Userpage />
                <FooterMenu />
              </>
            }
          />
          <Route
            path="/projects/:projectId/addtask"
            element={
              <>
                <AddTaskPage />
                <FooterMenu />
              </>
            }
          />
        </Route>

        <Route
          path="/unauthorized"
          element={
            <>
              <UnauthorizedPage />
              <FooterMenu />
            </>
          }
        />

        {/* Private routes for admin */}
        <Route
          path="/users"
          element={
            <ProtectedRoute
              Page={UsersPage}
              typeOfUser={userAuthLevels.admin}
            />
          }
        />
        <Route
          path="/projects-of-user/:userId"
          element={
            <ProtectedRoute
              Page={MyProjects}
              typeOfUser={userAuthLevels.admin}
            />
          }
        />

        {/* Public routes (No FooterMenu here) */}
        <Route path="/loggedout" element={<LoggedOutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/registerSuccess" element={<RegisteredSuccessPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
