// import { useState } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5005";

// function DeckForm(props) {
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");

//     const handleName = (e) => setName(e.target.value);
//     const handleDescription = (e) => setDescription(e.target.value);

//     const handleSubmit = (e) => {
//         e.preventDefault();
    
//         const requestBody = { name, description };
//         axios
//         .post(`${API_URL}/deck/create-deck`, requestBody)
//         .then((response) => {
//           console.log(response.data);
//           setName("");
//           setDescription("");
//           onSubmit(response.data);
//         });
//         setName("");
//         setDescription("");
//         getAllDecks()
//       };

//     return ( 
//         <div>
//         <h1>Your Deck</h1>
//         <form onSubmit={props.handleOnSubmit}>
//           <label>Name</label>
//           <input
//             type="text"
//             name="deckName"
//             value={name}
//             onChange={handleName}
//           />
//           <label>Description</label>
//           <input
//             type="text"
//             name="description"
//             value={description}
//             onChange={handleDescription}
//           />
//           <button type="submit">SAVE CHANGES</button>
//         </form>
//         {/* <button onClick={showForm}>Add flashcard</button> */}
//       </div>
//      );
// }

// export default DeckForm;