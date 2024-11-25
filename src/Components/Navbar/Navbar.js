import React, { useContext, useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../Context/Theme";
import "./Navbar.css";
import profilePic from "../../Pages/Images/profile.jpg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [{ themename, toggeltheme }] = useContext(ThemeContext);

  const handleScroll = () => {
    setNavColor(window.scrollY >= 20);
  };

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");
    if (themename === "dark") {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [themename]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky-navbar" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
        <img
        src={profilePic}
        alt="Profile"
        className={`profile-pic ${themename === "light" ? "profile-pic-light" : "profile-pic-dark"}`}
        />
          <span className={`logo-text ${themename === "light" ? "logo-dark" : "logo-light"}`}>
            Emili Robles
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(!expand)}
        >
          <div className="toggleButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" onClick={() => setExpand(false)} activeClassName="active-link">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/aboutme" onClick={() => setExpand(false)} activeClassName="active-link">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/resume" onClick={() => setExpand(false)} activeClassName="active-link">
                Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/projects" onClick={() => setExpand(false)} activeClassName="active-link">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contactme" onClick={() => setExpand(false)} activeClassName="active-link">
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <div className="theme-switch" onClick={toggeltheme}>
                <div className="toggle-inner" />
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
