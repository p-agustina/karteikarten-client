import {Link} from "react-router-dom";

function ProfilePage(props) {
    
    return ( 
        <div>
            <h1>Your Deck</h1>
            <Link><button>START</button></Link>
            <Link to="/my-deck"><button>EDIT</button></Link>
        </div>
     );
}

export default ProfilePage;