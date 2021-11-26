import { React } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
   return (
      <>
         <nav className={"navbar"}>
            <div className={"navbar-logo"}>{"CHAINLINK"}</div>
            <div className={"navbar-items"}>
               <span>
                  <Link to={"/link1"}>{"Link 1"}</Link>
               </span>
               <span>
                  <Link to={"/link1"}>{"Link 1"}</Link>
               </span>
               <span>
                  <Link to={"/link1"}>{"Link 1"}</Link>
               </span>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
