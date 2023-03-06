import { useState, useEffect } from "react";
import axios from "axios";
import FlashcardsList from "../components/Flashcards/FlashcardsList";

const API_URL = "http://localhost:5005";

function MyDecks2({
  decks,
  setDecks,
  flashcards,
  setFlashcards,
  user,
  getAllDecks,
  getAllFlashcards,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [translation, setTranslation] = useState("");
  const [germanWord, setGermanWord] = useState("");
  const [show, setShow] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleTranslation = (e) => setTranslation(e.target.value);
  const handleGermanWord = (e) => setGermanWord(e.target.value);

  //EDIT DECK
  const handleDeckSubmit = (e, deckId) => {
    e.preventDefault();
    const requestBody = { name, description };
    axios.post(`${API_URL}/deck/edit/${deckId}`, requestBody).then(() => {});
    setName("");
    setDescription("");
    getAllDecks();
  };

  //ADD FLASHCARD ROUTE
  const handleAddCardSubmit = (e, deckId) => {
    e.preventDefault();
    const requestBody = { translation, germanWord, deckId };
    axios.post(`${API_URL}/deck/flashcard`, requestBody).then(() => {});
    setGermanWord("");
    setTranslation("");
    getAllFlashcards();
  };
 
   useEffect(() => {
    setDecks(decks);
    setFlashcards(flashcards);
  }, []);
 

  function showForm(formType, deckId) {
    setShow(formType);
    // if (show === true) {
    //   setShow(false);
    // } else {
    //   setShow(true);
    // }
  };

  return (
    <div className="deckContainer">
      <div className="leftContainer">
        <div>
          {user &&
            decks
              .filter((deck) => deck._id === user.deck)
              .map((deck) => {
                return (
                  <div>
                  <div className="MyDeck">
                    <h3>{deck.name}</h3>
                    <p>{deck.description}</p>
                  </div>
                    <button
                      className="authBtn"
                      onClick={() => showForm(`edit-deck-${decks._id}`)}
                    >
                      EDIT DECK
                    </button>
                    <button
                      className="authBtn"
                      onClick={() => showForm(`add-flashcard-${decks._id}`)}
                    >
                      Add flashcard
                    </button>
                    {show === `add-flashcard-${decks._id}` && (
                      <form onSubmit={(e) => handleAddCardSubmit(e, deck._id)}>
                        <div className="deckForm">
                          <label>Word in your language</label>
                          <input
                            type="text"
                            name="translation"
                            value={translation}
                            onChange={handleTranslation}
                          />
                          <label>Word in German</label>
                          <input
                            type="text"
                            name="germanWord"
                            value={germanWord}
                            onChange={handleGermanWord}
                          />
                          <button type="submit">Add</button>
                        </div>
                      </form>
                    )}
                    {show === `edit-deck-${decks._id}` && (
                      <form onSubmit={(e) => handleDeckSubmit(e, deck._id)}>
                        <div className="deckForm">
                          <label/>
                          <input
                            className="authInput"
                            placeholder={deck.name}
                            type="text"
                            name="deckName"
                            value={name}
                            onChange={handleName}
                          />
                          <label></label>
                          <input
                            className="authInput"
                            placeholder={deck.description}
                            type="text"
                            name="description"
                            value={description}
                            onChange={handleDescription}
                          />
                          <button type="submit">SAVE CHANGES</button>
                        </div>
                      </form>
                    )}
                  </div>
                );
              })}
        </div>
        <br />
      </div>

      <div className="flashcardsContainer">
      <FlashcardsList flashcards={flashcards} setFlashcards={setFlashcards}/>
      </div>
    </div>
  );
}

export default MyDecks2;
