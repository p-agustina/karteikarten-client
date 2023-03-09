import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function DeckForm({ deck, decks, setDecks, getAllDecks }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const handleDeckSubmit = (e, deckId) => {
    e.preventDefault();
    const requestBody = { name, description };
    axios.post(`${API_URL}/deck/edit/${deckId}`, requestBody).then(() => {});
    setName("");
    setDescription("");
    getAllDecks();
  };

  useEffect(() => {
    setDecks(decks);
  }, []);
 

  return (
    <div>
      <form onSubmit={(e) => handleDeckSubmit(e, deck._id)}>
        <div className="deckForm">
          <label />
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
    </div>
  );
}

export default DeckForm;
