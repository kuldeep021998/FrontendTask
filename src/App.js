import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/user/Login";
import SignUp from "./components/user/SignUp";
import UIPage from "./components/dashboard/UIPage";
import Displaycards from "./components/dashboard/Displaycards";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<UIPage />} path="/uipage" />
        <Route element={<Displaycards />} path="/login/display" />
      </Routes>
    </Router>
  );
}

export default App;
