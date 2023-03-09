import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";

function Play({
  decks,
  setDecks,
  flashcards,
  setFlashcards,
  getAllDecks,
  getAllFlashcards,
}) {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    getAllDecks();
    getAllFlashcards();
  }, []);

  let userDeck = decks.find((deck) => {
    return deck._id === user.deck;
  });

  const handleFlashcardClick = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  const handleNextClick = () => {
    setCurrentFlashcardIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div class="Play">
      <div className="flashcard" onClick={handleFlashcardClick}>
        {isFlipped ? (
          <p>{userDeck.flashcards[currentFlashcardIndex].germanWord}</p>
        ) : (
          <p>{userDeck.flashcards[currentFlashcardIndex]?.translation}</p>
        )}
      </div>
      <div className="PlayBtns">
      <button className="playBtn" onClick={handleNextClick}>I didn't know it</button>
      <button className="playBtn" onClick={handleNextClick}>I knew it!</button>
      </div>
    </div>
  );
}

export default Play;
