import "./App.css";
import Counter from "./components/Counter/Counter.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoggedOutPage from "./pages/LoggedOutPage/LoggedOutPage.jsx";
import { Helmet } from "react-helmet";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage.jsx";

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
        <Route path="/" exact element={<HomePage />} />
        <Route path="/loggedout" exact element={<LoggedOutPage />} />
        <Route path="/form" element={<LoginRegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
