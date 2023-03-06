import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MyDecks2 from "./MyDecks2";
import Play from "./Play";

const API_URL = "http://localhost:5005";

function ProfilePage() {
  const [decks, setDecks] = useState([]);
  const [flashcards, setFlashcards] = useState([]);

  const getAllDecks = () => {
    axios
      .get(`${API_URL}/deck/decks`)
      .then((decks) => {
        console.log(decks);
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

  useEffect(() => {
    getAllDecks();
    getAllFlashcards();
  }, []);

  return (
    <div>
      <h1>Your Deck</h1>
      {/* ADD THAT IF THERE ISN'T A DECK CREATED YOU CAN'T START */}
      {/* <Link to="/my-deck"><button>CREATE DECK</button></Link> */}
      <div>
        <MyDecks2
          decks={decks}
          setDecks={setDecks}
          flashcards={flashcards}
          setFlashcards={setFlashcards}
        >
          <button>CREATE DECK</button>
        </MyDecks2>
        
        <Link to={{ pathname: "/play", state: { decks, setDecks, flashcards, setFlashcards } }}>
        <button className="authBtn">START</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;
