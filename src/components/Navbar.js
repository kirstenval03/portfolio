import { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const Navbar = () => {
    const [pageLink, setPageLink] = useState("home");
    const [scrolld, setScrolld] = useState(false);

    useEffect(() => {
        const withScroll = () => {
            if (window.scrollY> 50) {
                setScrolld(true);
            } else {
                setScrolld(false);
            }
        }

        window.addEventListener("scroll", withScroll);

        return () => window.removeEventListener("scroll", withScroll);
    }, [])

    const onUpdatePageLink = (value) => {
        setPageLink(value);
    }

return (
<Navbar expand="lg" className={scrolld ? "scrolld": ""}>
    <Container>
        <Navbar.Brand href="#home">
            <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-icon">
            </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={pageLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatePageLink("home")}>Home</Nav.Link>
                <Nav.Link href="#projects" className={pageLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatePageLink("projects")}>Projects</Nav.Link>
                <Nav.Link href="#skills" className={pageLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdatePageLink("skills")}>Skills</Nav.Link>


                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
            Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
            Separated link
        </NavDropdown.Item>
        </NavDropdown> */}

            </Nav>
            <span>
                <div className="socialMedia">
                    <a href="#linkedln"><img src={""} alt="linkedlnLG" /> </a>
                    <a href="#github"><img src={""} alt="githubLG" /> </a>
                </div>
                <button 
                className="contactBT" 
                onClick={() => 
                console.log("contact")}>
                    <span>Connect with me!</span>
                </button>
            </span>
        </Navbar.Collapse>
    </Container>
</Navbar>
);
}