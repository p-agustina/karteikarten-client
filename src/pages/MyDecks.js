import { useState } from "react";
import axios from "axios";


const API_URL = "http://localhost:5005";

function MyDecks() {
  const [translation, setTranslation] = useState("");
  const [germanWord, setGermanWord] = useState("");
  const [show, setShow] = useState(false);

  const handleTranslation = (e) => setTranslation(e.target.value);
  const handleGermanWord = (e) => setGermanWord(e.target.value);

  const handleAddCardSubmit = (e) => {
    e.preventDefault();

    const requestBody = {translation, germanWord};

    axios.post(`${API_URL}/flashcard`, requestBody)
    .then(response => {
        console.log(response.data)
    })
  }



  function showForm() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <div>
      <div>
        <h1>Your Deck</h1>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="deckName"
            // value={deckName}
            // onChange={handleDeckName}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            // value={description}
            // onChange={handleDescription}
          />
        <button type="submit">SAVE CHANGES</button>
        </form>
        <button onClick={showForm}>Add flashcard</button>
      </div>
      <div>
        {show && (
          <form onSubmit={handleAddCardSubmit}>
            <label>Word in your language</label>
            <input type="text" name="translation" value={translation} onChange={handleTranslation}/>
            <label>Word in German</label>
            <input type="text" name="germanWord" value={germanWord} onChange={handleGermanWord}/>
            <button type="submit">Add</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default MyDecks;
