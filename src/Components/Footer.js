import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
       <div className="footer-basic border-top mt-5 container-xl">
        <footer>
            <div className="social"><i className="btn btn-lg bi bi-linkedin"></i><i className="btn btn-lg bi bi-skype"></i><i className=" btn btn-lg bi bi-facebook"></i><i className="btn btn-lg bi bi-twitter"></i><i className="btn btn-lg bi bi-instagram"></i></div>
            <ul className="list-inline">
                <li className="btn list-inline-item"><Link to="/" className='link'>Home</Link></li>
                <li className="btn list-inline-item"><Link to="about" className='link'>About</Link></li>
                <li className="btn list-inline-item"><Link to="articles" className='link'>Articles</Link></li>
                <li className="btn list-inline-item"><Link to="paintings" className='link'>Paintings</Link></li>
            </ul>
            <p className="copyright">Wided Hasnaoui © 2022</p>
            <p className="copyright">Website made by <a style={{textDecoration:"none",fontWeight:"bold",color:"black"}} rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/rayenlabidi-full-stack-javascript-developer'>Rayen Labidi <i class="bi bi-box-arrow-up-right"></i></a></p>
        </footer>
    </div>
  )
};

export default Footer;
