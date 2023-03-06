import { Link } from "react-router-dom";
import {  useEffect } from "react";
import MyDecks2 from "./MyDecks2";
import Play from "./Play";

const API_URL = "http://localhost:5005";

function ProfilePage({decks, setDecks, flashcards, setFlashcards, getAllFlashcards, getAllDecks, user={user}}){
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
          user={user}
          decks={decks}
          setDecks={setDecks}
          flashcards={flashcards}
          setFlashcards={setFlashcards}
          getAllDecks={getAllDecks}
          getAllFlashcards={getAllFlashcards}
        >
          <button>CREATE DECK</button>
        </MyDecks2>
        
        <Link to="/play">
        <button className="authBtn">START</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;
