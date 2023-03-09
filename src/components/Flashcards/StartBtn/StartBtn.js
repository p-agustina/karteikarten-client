import { useNavigate } from "react-router-dom";

function StartBtn({deckId}) {
    
        const navigate = useNavigate();
    return (
        <button onClick={() => navigate(`/decks/${deckId}/flashcards`)}>
            START
        </button>
    );
}

export default StartBtn;