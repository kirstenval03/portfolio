import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="contactInfo">

                <Nav.Link href="#home" className={pageLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatePageLink("home")}>Home</Nav.Link>
                <Nav.Link href="#projects" className={pageLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatePageLink("projects")}>Projects</Nav.Link>
                <Nav.Link href="#skills" className={pageLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatePageLink("skills")}>Skills</Nav.Link>
                <span className="icons">
                    <div className="socialMedia">
                        <a href="#linkedln"><img src={linkedln} alt="linkedlNB" /> </a>
                        <a href="#github"><img src={github} alt="gitNB" /> </a>
                    </div>
                    <button className="contactBT"
                        onClick={() =>
                            console.log("contact")}>
                        <span>Connect with me!</span>
                    </button>
                </span>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
);
}