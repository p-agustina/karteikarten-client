import { useState } from "react";

function Flashcard({ flashcards }) {
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlashcardClick = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return (
    <div className="Play">
      <div className="flashcard" onClick={handleFlashcardClick}>
        {isFlipped ? (
          <h1>{flashcards[currentFlashcardIndex].germanWord}</h1>
        ) : (
          <h1>{flashcards[currentFlashcardIndex].translation}</h1>
        )}
      </div>
    </div>
  );
}

export default Flashcard;
