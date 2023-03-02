import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import MyDecks from "./pages/MyDecks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/my-deck" element={<MyDecks/>}/>
      </Routes>
    </div>
  );
}

export default App;
