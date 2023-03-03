import { useState, useEffect } from "react";
import axios from "axios";
// import DeckForm from "../components/DeckForm";

const API_URL = "http://localhost:5005";

function MyDecks() {
  const [decks, setDecks] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [translation, setTranslation] = useState("");
  const [germanWord, setGermanWord] = useState("");
  const [show, setShow] = useState(false);
  console.log("this is the deck", decks[0])

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleTranslation = (e) => setTranslation(e.target.value);
  const handleGermanWord = (e) => setGermanWord(e.target.value);

  const handleAddDeckSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, description };
    axios.post(`${API_URL}/deck/create-deck`, requestBody).then((response) => {
      console.log(response.data);
    });
    setName("");
    setDescription("");
    getAllDecks()
  };

  const handleAddCardSubmit = (e) => {
    e.preventDefault();

    const requestBody = { translation, germanWord, deckId: decks[0]._id };
    console.log("este es el id del deck", decks[0]._id)

    axios
    .post(`${API_URL}/deck/flashcard`, requestBody)
    .then((response) => {
      console.log(response.data);
    });
  };
  
  const getAllDecks = () => {
    axios
      .get(`${API_URL}/deck/decks`)
      .then((decks) => {
        console.log(decks)
        setDecks(decks.data)})
      .catch((error) => console.log(error));
  };

  useEffect(()=>{
    getAllDecks()
  },[])

  function showForm(formType) {
      setShow(formType);
  }

  return (
    <div>
    {!decks.length > 0 &&
      <div>
        <h1>Your Deck</h1>
        <form onSubmit={handleAddDeckSubmit}>
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
      }
      <div>
        {decks && decks.map((deck)=>{
            return (
              <div>
                <p>{deck.name}</p>
                <button onClick={() => showForm(`edit-deck-${decks._id}`)}>EDIT DECK</button>
                <button onClick={() => showForm(`add-flashcard-${decks._id}`)}>Add flashcard</button>
              </div>
            )
        })}
        {show === `add-flashcard-${decks._id}` && (
          <form onSubmit={handleAddCardSubmit}>
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
          </form>
        )}
        {show === `edit-deck-${decks._id}` && 
        <form onSubmit={handleAddDeckSubmit}>
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
        </form>}
      </div>
    </div>
  );
}

export default MyDecks;
