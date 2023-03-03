import {Link} from "react-router-dom";

function ProfilePage(props) {
    
    return ( 
        <div>
            <h1>Your Deck</h1>
        {/* ADD THAT IF THERE ISN'T A DECK CREATED YOU CAN'T START */}
            <Link><button>START</button></Link>
            <Link to="/my-deck"><button>CREATE DECK</button></Link>
        </div>
     );
}

export default ProfilePage;