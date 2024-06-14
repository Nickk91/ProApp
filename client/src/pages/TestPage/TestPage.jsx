import React from "react";
import "../style/pagestyle.css";
import StatusSelection from "../../components/ProjectStatusSelection/ProjectStatusSelection";
import Spinner from "../../components/Spinner/Spinner.jsx";
import TestComponent from "../../components/TestComponent/TestComponent.jsx";

const TestPage = () => {
  return (
    <section className="page">
      <TestComponent />
    </section>
  );
};

export default TestPage;
