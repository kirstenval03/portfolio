import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

import github from "../assets/images/github.svg"
import linkedln from "../assets/images/linkedln.svg"
import kirs from "../assets/images/KirsVG.png"


export const NavBar = () => {
const [pageLink, setPageLink] = useState("home");



const onUpdatePageLink = (value) => {
    setPageLink(value);
}


return (
<Navbar expand="lg" className="NB1" data-bs-theme="ligth">
    <Container>
        <Navbar.Brand href="#">
            <img src={kirs} alt="KirsLG" className="kirsLG" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="contactInfo">
            <Link
  to="home"
  smooth={true}
  duration={500}
  className={`${
    pageLink === "home" ? "active navbar-link" : "navbar-link"
  } hand-pointer`}
  onClick={() => onUpdatePageLink("home")}
>
  Home
</Link>
<Link
  to="projects"
  smooth={true}
  duration={500}
  className={`${
    pageLink === "projects" ? "active navbar-link" : "navbar-link"
  } hand-pointer`}
  onClick={() => onUpdatePageLink("projects")}
>
  Projects
</Link>
<Link
  to="skills"
  smooth={true}
  duration={500}
  className={`${
    pageLink === "skills" ? "active navbar-link" : "navbar-link"
  } hand-pointer`}
  onClick={() => onUpdatePageLink("skills")}
>
  Skills
</Link>


                <span className="icons">
                    <div className="socialMedia">
                        <a href="https://www.linkedin.com/in/kirsten-valdez" target="_blank" rel="noopener noreferrer">
                            <img src={linkedln} alt="linkedlNB" />
                        </a>
                        <a href="https://github.com/kirstenval03" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="gitNB" />
                        </a>
                    </div>
                    <a href="#email-section">
                        <button className="contactBT">
                            <span>Send me an Email!</span>
                        </button>
                    </a>
                </span>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
);
}