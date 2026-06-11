import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Grocery from './Grocery';
import UserContext from "../../utils/UserContext";
import { useContext } from "react";

const Header = () => {
  const isOnline=useOnlineStatus();
  const userName=useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          style={{ height: "100px", width: "100px" }}
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{isOnline?"👍":"👎"} </li>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link> </li>
          <li><Link to="/cart">Cart</Link> </li>
          <li className=" font-bold">{userName.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;