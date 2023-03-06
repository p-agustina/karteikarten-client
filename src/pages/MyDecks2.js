import { useState, useEffect } from "react";
import trashcan from "../images/icons8-trash-64.png"
import axios from "axios";

const API_URL = "http://localhost:5005";

function MyDecks2({ decks, setDecks, flashcards, setFlashcards }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [translation, setTranslation] = useState("");
  const [germanWord, setGermanWord] = useState("");
  const [show, setShow] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleTranslation = (e) => setTranslation(e.target.value);
  const handleGermanWord = (e) => setGermanWord(e.target.value);

  const handleDeckSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, description };
    axios.post(`${API_URL}/deck/create-deck`, requestBody).then((response) => {
      console.log(response.data);
    });
    setName("");
    setDescription("");
    getAllDecks();
  };

  const handleEditDeckSubmit = (e, deckId) => {
    e.preventDefault();
    const requestBody = { name, description, deckId: decks[0]._id };
    axios.post(`${API_URL}/deck/edit-deck`, requestBody).then(() => {});
    setName("");
    setDescription("");
    getAllDecks();
  };

  const handleAddCardSubmit = (e, deckId) => {
    e.preventDefault();

    const requestBody = { translation, germanWord, deckId: decks[0]._id  };
    axios.post(`${API_URL}/deck/flashcard`, requestBody).then((response) => {
      console.log(response.data);
    });
    setGermanWord("");
    setTranslation("");
    getAllFlashcards();
  };

  const getAllDecks = () => {
    axios
      .get(`${API_URL}/deck/decks`)
      .then((decks) => {
        console.log(decks);
        setDecks(decks.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setDecks(decks);
  }, []);
  
  useEffect(() => {
    setFlashcards(flashcards);
  }, []);

  const getAllFlashcards = () => {
    axios
      .get(`${API_URL}/deck/flashcards`)
      .then((flashcards) => {
        setFlashcards(flashcards.data);
      })
      .catch((error) => console.log(error));
  };

 

  function showForm(formType, deckId) {
    setShow(formType);

    // if (show === true) {
    //   setShow(false);
    // } else {
    //   setShow(true);
    // }
  }

  return (
    <div className="deckContainer">
      <div className="leftContainer">
        {!decks.length > 0 && (
          <div>
            <h1>Your Deck</h1>
            <form onSubmit={handleDeckSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="deckName"
                value={name}
                onChange={handleName}
              />
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleDescription}
              />
              <button type="submit">SAVE CHANGES</button>
            </form>
          </div>
        )}
        <div>
          {decks &&
            decks.map((deck) => {
              return (
                <div>
                  <h3>{deck.name}</h3>
                  <p>{deck.description}</p>
                  <button className="authBtn" onClick={() => showForm(`edit-deck-${decks._id}`)}>
                    EDIT DECK
                  </button>
                  <button className="authBtn"
                    onClick={() => showForm(`add-flashcard-${decks._id}`)}
                  >
                    Add flashcard
                  </button>
                  {/* <Link to="/play"><button>CREATE DECK</button></Link> */}
                </div>
              );
            })}

          {show === `add-flashcard-${decks._id}` && (
            <form onSubmit={handleAddCardSubmit}>
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
            <form onSubmit={handleEditDeckSubmit}>
            <div className="deckForm">
              <label>Name</label>
              <input
                type="text"
                name="deckName"
                value={name}
                onChange={handleName}
              />
              <label>Description</label>
              <input
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
        <br />
      </div>

        <div className="flashcardsContainer">
        <h3>Flashcards:</h3>
          {flashcards &&
            flashcards.map((flashcard) => (
                  <div key={flashcard._id}>
              { console.log(flashcard.id)}
                  <span>{flashcard.translation}</span>
                  <span>{flashcard.germanWord}</span>
                  {/* <a onClick={() => handleDeleteFlashcard(flashcard._id)} */}
                  <a href="#"><img src={trashcan} alt="delete button"/></a>
                </div>
            )
            )}
        </div>
    </div>
  );
}

export default MyDecks2;