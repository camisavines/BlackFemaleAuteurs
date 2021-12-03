import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";


const Navbar = () => {
    console.log(window.location.pathname, ROUTES.HOME);

    return (
        <nav className="navbar navbar-expand-lg w-100 navbar-light" style={{fontSize: "10pt"}}>
        {/* <nav className="navbar navbar-expand-lg w-100 navbar-light" style={{fontSize: "10pt", backgroundColor: window.location.pathname === ROUTES.HOME ? "transparent" : "black"}}> */}
            <Link className="navbar-brand" to={ROUTES.HOME}>BFA</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.ABOUT}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.CLASSMATES}>Classmates</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.RESOURCES}>Resources</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;