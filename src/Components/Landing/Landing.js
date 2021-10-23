import { Link } from 'react-router-dom';
import { Button, Container, Col, Image, Row } from 'react-bootstrap';
import "./Landing.css";

export default function Landing() {
    return (
        <Container fluid className="cont-landing">
            <Row>
                <Col className="text-center mt-5 pt-5">
                    <Image src="https://i.postimg.cc/kGWPtHsS/yugioh-home.png" alt="Yu-Gi-Oh" />
                </Col>
                <Col className="align-self-center text-center">
                    <Image src="https://i.postimg.cc/sXkRxzYy/yugioh-letras.png" alt="Titulo Yu-Gi-Oh" />
                    <Link to="/home"><Button size="lg" className="my-bgb">Go home!</Button></Link>
                </Col >
            </Row>
        </Container>
    );
}