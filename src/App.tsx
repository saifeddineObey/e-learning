import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";

const App = () => {
  return (
    <div className="app ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
