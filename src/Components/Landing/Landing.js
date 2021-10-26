import { Link } from 'react-router-dom';
import { Button, Container, Col, Image, Row } from 'react-bootstrap';
import "./Landing.css";

export default function Landing() {
    return (
        <Container fluid className="cont-landing">
            <Row className="h-100 align-items-end">
                <Col className="img-yugioh text-center ">
                    <Image className="" src="https://i.postimg.cc/kGWPtHsS/yugioh-home.png" alt="Yu-Gi-Oh" />
                </Col>
                <Col className="align-self-center text-center img-titulo pb-3">
                    <Row >
                        <Col md={12}>
                            <Image src="https://i.postimg.cc/sXkRxzYy/yugioh-letras.png" alt="Titulo Yu-Gi-Oh" />
                        </Col>
                        <Col>
                            <Link to="/home"><Button size="lg" className="my-bgb">Go home!</Button></Link>{' '}
                            <Link to="/about"><Button size="lg" className="my-bgb">About</Button></Link>
                        </Col>
                    </Row>
                </Col >
            </Row>
        </Container>
    );
}