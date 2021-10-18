import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import cards from "../../cardinfo.json";
import SideBar from "../SideBar/SideBar";

//import "./Home.css";

export default function Home() {

    const [cardListAPI, setCardListAPI] = useState([]);

    useEffect(() => {
        setCardListAPI(cards.data)
    }, [])

    const getListCards = () => {
        let i = 0;
        let cardList = [];
        while (i < 20) {
            cardList.push(cardListAPI[Math.floor(Math.random() * cardListAPI.length)])
            i++;
        }
        return cardList;
    }

    /* const limitedListCards = getListCards(); */

    /* console.log(limitedListCards) */


    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Col md={10}>
                    <Section limitedListCards={getListCards()} />
                </Col>
                <Col>
                    <SideBar />
                </Col>
            </Row>
        </Container>
    );
}
