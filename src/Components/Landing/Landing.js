//mport { NavLink } from 'react-router-dom';
import { Button, Container, Col, Image, Navbar, Nav, Row } from 'react-bootstrap';
import "./Landing.css";

export default function Landing() {
    return (
        <Container fluid className="cont-landing" expand="lg">
            <Navbar  bg="dark" variant="dark" fixed="top" >
                <Container >
                    <Navbar.Brand href="/"><Image width="120" src="https://i.postimg.cc/sXkRxzYy/yugioh-letras.png" alt="Logo Yu-Gi-Oh" /></Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link className="ml-1" href="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Row>
                <Col className="text-center mt-5 pt-5">
                    <Image src="https://i.postimg.cc/kGWPtHsS/yugioh-home.png" alt="Yu-Gi-Oh" />
                </Col>
                <Col className="align-self-center text-center">
                    <Image src="https://i.postimg.cc/sXkRxzYy/yugioh-letras.png" alt="Titulo Yu-Gi-Oh" />

                    <Button class="btn-primary" size="lg">Go home!</Button>
                </Col >
            </Row>
        </Container>
    );
}