import {React,useState} from "react";
import { Link } from "react-router-dom";
import { Offcanvas,ListGroup } from "react-bootstrap";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <nav className="navbar container-xxl" style={{ height: "150px" }}>
            <div className="row container">
                <Link
                    to="/"
                    className="fw-bold display-6 col-4 mb-2"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    Wided Hasnaoui
                </Link>
                <div className="container-xl col-8 d-flex flex-row justify-content-evenly d-none d-sm-flex">
                    <Link className="navlink" to="/">
                        Home
                    </Link>
                    <Link className="navlink" to="paintings">
                        Paintings
                    </Link>
                    <Link className="navlink" to="articles">
                        Articles
                    </Link>
                    <Link className="navlink" to="about">
                        About
                    </Link>
                    <Link className="navlink" to="contact">
                        Contact
                    </Link>
                </div>
                <div className="col-8 text-end d-sm-none">
                    <i
                        type="button"
                        className="h1 bi bi-list"
                        style={{fontSize:"40px"}}
                        onClick={handleShow}
                    ></i>
                </div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="fw-bold display-6">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ListGroup className="p-2">
                    <Link className="navlink2" to="/" onClick={handleClose}>
                        Home
                    </Link>
                    <Link className="navlink2" to="paintings" onClick={handleClose}>
                        Paintings
                    </Link>
                    <Link className="navlink2" to="articles" onClick={handleClose}>
                        Articles
                    </Link>
                    <Link className="navlink2" to="about" onClick={handleClose}>
                        About
                    </Link>
                    <Link className="navlink2" to="contact" onClick={handleClose}>
                        Contact
                    </Link>
                    </ListGroup>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </nav>
    );
};

export default Navbar;
