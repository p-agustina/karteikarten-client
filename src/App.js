import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
// import MyDecks from "./pages/MyDecks";
import Play from "./pages/Play";
import MyDecks2 from "./pages/MyDecks2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>}/>
        {/* <Route path="/my-deck" element={<MyDecks/>}/> */}
        <Route path="/play" element={<Play/>}/>
        <Route path="/my-deck2" element={<MyDecks2/>}/>
      </Routes>
    </div>
  );
}

export default App;
