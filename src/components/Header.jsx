import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo/logo.png";
import "../../src/styles/HeaderStyle.css"

import  { useState } from "react";


export const Header = () => {
    
// useState for enbling navBar on Scrolling
   const[nav,setNav] = useState();

   // to show or hide the navigation bar when a user scrolls the webpage.
const changeValueOnScroll = () => {
   const scrollValue = document?.documentElement?.scrollTop;
   scrollValue > 100 ? setNav(true) : setNav(false);
};

window.addEventListener("scroll", changeValueOnScroll);




  return (
    <header>
      <Navbar 
          collapseOnSelect 
          expand="lg" 
          className={`${nav === true ? "sticky": ""}`}>
      
      
      <Container>
      <Navbar.Brand>
              {/* To Add Logo */}
            <Link to="/" className="logo"> 
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          
          {/* Used BootStrap5  ms-auto to move content to rightSide*/}
            <Nav className="ms-auto">
             
              <Nav.Link as={Link} to="/">
                     Home
              </Nav.Link>


              <Nav.Link as={Link} to="/about">
                      About
               </Nav.Link>


               <Nav.Link as={Link} to="/menu">
                     Our Menu
               </Nav.Link>

                
               <Nav.Link as={Link} to="/shop">
                     Shop
               </Nav.Link>
                

               <Nav.Link as={Link} to="/blog">
                     Blog
               </Nav.Link>


               <Nav.Link as={Link} to="/contact">
                     Contact
               </Nav.Link>


               
               <Nav.Link as={Link} to="/">
                   <div className="cart">
                      <i class="bi bi-bag fs-5"></i> 
                      <em className="roundpoint">2</em>
                    </div>
               </Nav.Link>




            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
