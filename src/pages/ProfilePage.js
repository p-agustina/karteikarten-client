import { useEffect, useContext } from "react";
import MyDecks2 from "./MyDecks2";
import { AuthContext } from "../context/auth.context";
import BeatLoader from "react-spinners/BeatLoader";

const API_URL = process.env.REACT_APP_API_URL;

function ProfilePage({
  decks,
  setDecks,
  flashcards,
  setFlashcards,
  getAllFlashcards,
  getAllDecks,
  user = { user },
}) {
  const { isLoading, setIsLoading } = useContext(AuthContext);

  useEffect(() => {
    // setIsLoading(true);
    getAllDecks();
    getAllFlashcards();
    setTimeout(() => {
      setIsLoading(false);
    }, 5000000);
  }, []);

  return (
    <div className="MyDecksContainer">
      {
        isLoading?
      <div className="isLoadding">
        <BeatLoader
          color={"#C796CF"}
          loading={isLoading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
        :
      <div>
      <div>
        <MyDecks2
          user={user}
          decks={decks}
          setDecks={setDecks}
          flashcards={flashcards}
          setFlashcards={setFlashcards}
          getAllDecks={getAllDecks}
          getAllFlashcards={getAllFlashcards}
        />
        </div>
      </div>
      }

    </div>
  );
}

export default ProfilePage;
