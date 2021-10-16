import { Form, FormControl, Button, Image, Navbar, Nav } from 'react-bootstrap';
//import "./Navbar.css";

export default function NavBar() {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><Image width="120" src="https://i.postimg.cc/sXkRxzYy/yugioh-letras.png" alt="Logo Yu-Gi-Oh" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link className="ml-1" href="/about">About</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
