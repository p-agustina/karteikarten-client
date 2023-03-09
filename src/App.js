import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components//Navbar/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Play from "./pages/Play";
import MyDecks2 from "./pages/MyDecks2";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "./context/auth.context";


const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [decks, setDecks] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const { user } = useContext(AuthContext)
  
  const getAllDecks = () => {
    axios
      .get(`${API_URL}/deck/decks`)
      .then((decks) => {
        console.log(decks.data);
        setDecks(decks.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllFlashcards = () => {
    axios
      .get(`${API_URL}/deck/flashcards`)
      .then((flashcards) => {
        setFlashcards(flashcards.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/*" element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage
         user={user}
          decks={decks}
          setDecks={setDecks}
          flashcards={flashcards}
          setFlashcards={setFlashcards}
          getAllFlashcards={getAllFlashcards}
          getAllDecks={getAllDecks}
          />}
        />
        <Route path="/play" element={<Play 
          decks={decks}
          setDecks={setDecks}
          flashcards={flashcards}
          setFlashcards={setFlashcards}
          getAllDecks={getAllDecks}
          getAllFlashcards={getAllFlashcards}
        />} />
        <Route path="/my-deck2" element={<MyDecks2 />} />
      </Routes>
    </div>
  );
}

export default App;
