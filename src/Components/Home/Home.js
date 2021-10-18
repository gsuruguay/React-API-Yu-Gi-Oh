import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import cards from "../../cardinfo.json";
import SideBar from "../SideBar/SideBar";

//import "./Home.css";

export default function Home() {

    //Esta lista no debe cambiar... se filtra en base a esta
    const [cardListAPI, setCardListAPI] = useState([]);
    //Esta es la que si cambio... la que modifico con los select
    const [filterList, setFilterList] = useState([]);


    useEffect(() => {
        getListCards();
    }, [])

    //Funcion filtra 20 cards de toda la lista cards
    const getListCards = () => {
        let i = 0;
        let cardList = [];
        while (i < 20) {
            cardList = [...cardList, cards.data[Math.floor(Math.random() * cards.data.length)]];
            i++;
        }
        setCardListAPI(cardList);
        setFilterList(cardList);
    }




    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Col md={10}>
                    <Section limitedListCards={cardListAPI} 
                    filterList={filterList}/>
                </Col>
                <Col>
                    <SideBar />
                </Col>
            </Row>
        </Container>
    );
}
