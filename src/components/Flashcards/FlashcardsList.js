import trashcan from "./icons8-trash-64.png";
import axios from "axios";
import "./FlashcardsList.css";

const API_URL = "http://localhost:5005";

function FlashcardsList({ flashcards, setFlashcards }) {
  const handleDelete = (e, flashcardId) => {
    e.preventDefault();
    axios.delete(`${API_URL}/deck/flashcards/${flashcardId}`).then(() => {});
  };

  return (
    <div>
      <h3>Flashcards:</h3>
      {flashcards &&
        flashcards.map((flashcard) => (
          <form onSubmit={(e) => handleDelete(e, flashcard._id)}>
            <div className="listWordsContainer" key={flashcard._id}>
              {console.log(flashcard.id)}
              <span className="translation">{flashcard.translation}</span>
              <span className="germanWord">{flashcard.germanWord}</span>
              <button type="submit">
                <img src={trashcan} alt="delete button" />
              </button>
            </div>
          </form>
        ))}
    </div>
  );
}

export default FlashcardsList;
