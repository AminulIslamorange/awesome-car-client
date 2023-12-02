import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-32 mb-12  mt-20  bg-black text-white">
 <aside>
    <img src={logo} alt=''/>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside>  
  <nav>
    <header className="footer-title">Services</header> 
   <Link className="link link-hover">Branding</Link>
   <Link className="link link-hover">Design</Link>
   <Link className="link link-hover">Marketing</Link>
   <Link className="link link-hover">Advertisement</Link>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
   <Link className="link link-hover">About us</Link>
   <Link className="link link-hover">Contact</Link>
   <Link className="link link-hover">Jobs</Link>
   <Link className="link link-hover">Press kit</Link>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
   <Link className="link link-hover">Terms of use</Link>
   <Link className="link link-hover">Privacy policy</Link>
   <Link className="link link-hover">Cookie policy</Link>
  </nav>
</footer>
    );
};

export default Footer;