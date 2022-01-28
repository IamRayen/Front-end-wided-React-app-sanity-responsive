import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
       <div className="footer-basic border-top mt-5 container-xl">
        <footer>
            <div className="social"><i className="btn btn-lg bi bi-skype"></i><i className=" btn btn-lg bi bi-facebook"></i><i className="btn btn-lg bi bi-twitter"></i><i className="btn btn-lg bi bi-instagram"></i></div>
            <ul className="list-inline">
                <li className="btn list-inline-item"><Link to="/" className='link'>Home</Link></li>
                <li className="btn list-inline-item"><Link to="about" className='link'>About</Link></li>
            </ul>
            <p className="copyright">Wided Hasnaoui © 2022</p>
            <p className="copyright">Website made by <span type="button" style={{fontWeight:"bold",color:"black"}}>Rayen Labidi <i class="bi bi-box-arrow-up-right"></i></span></p>
        </footer>
    </div>
  )
};

export default Footer;
