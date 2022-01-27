import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar container-xxl"  style={{height:"150px"}}>
            <div className="row container">
                <Link to="Home" className="fw-bold display-6 col-4" style={{textDecoration:"none",color:"black"}}>Wided Hasnaoui</Link>
                <div className="container col-8 d-flex flex-row justify-content-evenly" >
                    <Link className="navlink" to="home">Home</Link>
                    <Link className="navlink" to="paintings">Paintings</Link>
                    <Link className="navlink" to="articles">Articles</Link>
                    <Link className="navlink" to="about">About</Link>
                    <Link className="navlink" to="contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
