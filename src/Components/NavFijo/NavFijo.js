import { Container, Image, Navbar, Nav } from 'react-bootstrap';

export default function NavFijo() {
    return (
        <Navbar bg="black" variant="dark" fixed="top">
            <Container >
                <Navbar.Brand href="/"><Image width="120" src="https://i.postimg.cc/sXkRxzYy/yugioh-letras.png" alt="Logo Yu-Gi-Oh" /></Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link className="ml-1" href="/home">Home</Nav.Link>
                    <Nav.Link className="ml-1" href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

