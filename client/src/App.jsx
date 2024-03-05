import "./App.css";
import Counter from "./components/Counter/Counter.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoggedOutPage from "./pages/LoggedOutPage/LoggedOutPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";

function App() {
  return (
    <>
      {/* <h1>{import.meta.env.VITE_BASEURL}</h1> */}
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/loggedout" exact element={<LoggedOutPage />} />
        <Route path="/login" exact element={<LoginPage />} />

        {/* <Counter />; */}
      </Routes>
    </>
  );
}

export default App;
