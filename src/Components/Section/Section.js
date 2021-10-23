import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Section.css";

export default function Section(props) {

    return (
        <section className="mt-5 pt-5">
            <Row xs={1} md={5} className="g-4">
                {props.filterList?.map((data, index) => (
                    <Col className="cont-cards" key={index}>
                        <NavLink to={`/details/${data?.id}`}>
                            <Card>
                                <Card.Img variant="top" src={data?.card_images[0].image_url} />
                                <Card.Body>
                                    <Card.Title>{data?.race}</Card.Title>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </Col>
                ))}
            </Row>
        </section>
    );
}