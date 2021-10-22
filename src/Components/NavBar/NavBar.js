import { Form, FormControl, Button, Image, Navbar, Nav, Container } from 'react-bootstrap';
import "./NavBar.css";

export default function NavBar(props) {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
            <Container fluid>
            <Navbar.Brand href="/"><Image width="120" src="https://i.postimg.cc/sXkRxzYy/yugioh-letras.png" alt="Logo Yu-Gi-Oh" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-around">
                <Form className="d-flex searchNavBar" onSubmit={ e => e.preventDefault() } >
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        onChange={props.handleSearch}
                        value={props.searchValue}
                    />
                    <Button variant="outline-success" onClick={props.btnSearch}>Search</Button>
                </Form>
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link className="pr-3" href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
