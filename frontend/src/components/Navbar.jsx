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
                  <Link to={"/characterlist"}>{"List All"}</Link>
               </span>
               <span>
                  <Link to={"/buycharacter"}>{"Buy New"}</Link>
               </span>
               <span>
                  <Link to={"/wallet"}>{"Wallet"}</Link>
               </span>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
