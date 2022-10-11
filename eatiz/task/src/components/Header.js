import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <div className="background_image">
      <div className="custom_background">
      <Navbar className="nav_background" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            eatiz
          </Navbar.Brand>

          <Navbar.Toggle style={{color: "white"}} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{color: "red"}}>
            <Nav className="me-auto">
              <Nav.Link className="nav_link" href="#one">
                Menu One
              </Nav.Link>
              <Nav.Link className="nav_link_2" href="#two">
                Menu Two
              </Nav.Link>
              <Nav.Link className="nav_link_2" href="#three">
                Menu Three
              </Nav.Link>
              <Nav.Link className="nav_link_2" href="#four">
                Menu Four
              </Nav.Link>
              <img className="user_image" src="./assets/user.png" alt="user" />
              <NavDropdown
                style={{ color: "white" }}
                className="dropdown"
                title="User"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="nav_dropdown" href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="nav_dropdown" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className="nav_dropdown" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav_dropdown" href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
      <h1  className="heading">
        Discover Restaurant & Delicious Food
      </h1>
      <input type="text" id="fname" name="firstname" placeholder="search restaurant"></input>
      <button className="search_btn">Go</button>
      <br />
      
      <img className="dot_backround" src="./assets/dot.png" alt="dish" />
      <img className="dish_image" src="./assets/dish.png" alt="dish" />
    
      <br />
      <br />
      <br /><br />
      <div data-aos="flip-left" className="my-5">
     <button className="location_btn">Hyderabad</button>
     <img className="loc_img" src="./assets/loc.png" alt="location" />
     </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
