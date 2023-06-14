import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH  } from "react-icons/fa";


const Navigation = () => {
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state) => state.user);
    const [ignore, tuiter, active] = pathname.split("/");
    const links = [{name: "", icon:<FaTwitter />},
                    {name: "home", icon:<FaHome />},     
                    {name: "explore", icon:< FaHashtag />},
                    {name: "notifications", icon:< FaBell />},
                    {name: "messages", icon:<FaEnvelope />}, 
                    {name: "bookmarks", icon:<FaBookmark />},
                    {name: "lists", icon:<FaList />},
                    {name: "profile", icon:<FaUser />},
                    {name: "more", icon:<FaEllipsisH />}];
 return (
   <div className="list-group">
      
     {links.map((link) => (
        <Link
          key={link.name}
          to={`/tuiter/${link.name}`}
          className={`list-group-item text-capitalize fa-2x ${active === link.name ? "active" : ""}`}
        >
          {link.icon}
          <span className="link-name d-none d-xl-inline d-xxl-inline p-2 ">{link.name}</span>
        </Link>
        
     ))}
     {!currentUser && <Link className="list-group-item" to="/tuiter/login">   Login   </Link>}
          {!currentUser && <Link className="list-group-item" to="/tuiter/register">Register</Link>}
          { currentUser && <Link className="list-group-item" to="/tuiter/profile"> Profile </Link>}
     <br/>
     
     <button className="form-control rounded-pill bg-primary text-white">Tuit</button>
   </div>
 );
};
export default Navigation;