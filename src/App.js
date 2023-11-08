import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import Home from "./Component/Homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
