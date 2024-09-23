import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link ,useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from './../utils/UserContext';
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName,setbtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser,setLoggedInUser} = useContext(UserContext);
    //Subscribing to the store using a selector
    //Selectors nothing but its hook in react
    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();
    const handleLoginLogout = () => {
        if (btnName === "login") {
          navigate("/login"); // Redirect to login page
        } else {
          setLoggedInUser(null); // Logout user
          setbtnName("login");
        }
      };
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg mb-2 px-2">
            <div className="logo-container">
                <img className="w-40 bg-white" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status:{onlineStatus ? "✅": "❌"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button className="px-4" onClick={handleLoginLogout}>
            {btnName === "login" && !loggedInUser ? "Login" : "Logout"}
          </button>
          {loggedInUser && <li className="px-4 font-bold">{loggedInUser}</li>} 
                </ul>
            </div>
        </div>
    );
}
export default Header;