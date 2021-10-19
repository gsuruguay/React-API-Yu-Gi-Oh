import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import cards from "../../cardinfo.json";
import SideBar from "../SideBar/SideBar";

//import "./Home.css";

export default function Home() {

    //Se filtra en base a esta que es copia de la otra
    const [cardListAPI, setCardListAPI] = useState([]);

    //Esta es la que se envia al otro componente y la que seteo con el sort
    const [filterList, setFilterList] = useState([]);

    //Estado para usar en boton show more Cards del SideBar
    const [showMoreCards, setShowMoreCards] = useState(false);

    //Funcion filtra 20 0 40 cards de toda la lista cards.json
    const getListCards = (numLimit = 20) => {
        let i = 0;
        let cardList = [];
        while (i < numLimit) {
            cardList = [...cardList, cards.data[Math.floor(Math.random() * cards.data.length)]];
            i++;
        }
        setCardListAPI(cardList);
        setFilterList(cardList);
    }

    const handleChange = e => {
        let nuevaLista = [];

        if (e.target.id === "name-asc") {
            nuevaLista = cardListAPI.sort(sortAsc)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "name-desc") {
            nuevaLista = cardListAPI.sort(sortDesc)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "race-asc") {
            nuevaLista = cardListAPI.sort(sortRaceAsc)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "race-desc") {
            nuevaLista = cardListAPI.sort(sortRaceDesc)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "level-asc") {
            nuevaLista = cardListAPI.sort((a, b) => { return a.level - b.level })
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "level-desc") {
            nuevaLista = cardListAPI.sort((a, b) => { return b.level - a.level })
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "atk-asc") {
            nuevaLista = cardListAPI.sort((a, b) => { return a.atk - b.atk })
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "atk-desc") {
            nuevaLista = cardListAPI.sort((a, b) => { return b.atk - a.atk })
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "def-asc") {
            nuevaLista = cardListAPI.sort((a, b) => { return a.def - b.def })
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "def-desc") {
            nuevaLista = cardListAPI.sort((a, b) => { return b.def - a.def })
            setFilterList([...nuevaLista]);
        }
    }

    const sortAsc = (x, y) => {
        if (x.name < y.name) { return -1; }
        if (x.name > y.name) { return 1; }
        return 0;
    }
    const sortDesc = (x, y) => {
        if (x.name > y.name) { return -1; }
        if (x.name < y.name) { return 1; }
        return 0;
    }
    const sortRaceAsc = (x, y) => {
        if (x.race < y.race) { return -1; }
        if (x.race > y.race) { return 1; }
        return 0;
    }
    const sortRaceDesc = (x, y) => {
        if (x.race > y.race) { return -1; }
        if (x.race < y.race) { return 1; }
        return 0;
    }

    const showMore = ()=>{
        setShowMoreCards(!showMoreCards)
    }

    useEffect(() => {
        getListCards();
    }, []) 

    useEffect(() => {
        if(showMoreCards){
            getListCards(40);
            console.log(showMoreCards);
        } else {
            getListCards();
        }
    }, [showMoreCards])

    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Col md={10}>
                
                    <Section limitedListCards={cardListAPI}
                        filterList={filterList} />
                </Col>
                <Col>
                    <SideBar handleChange={handleChange} showMore={showMore} showMoreCards={showMoreCards}/>
                </Col>
            </Row>
        </Container>
    );
}
