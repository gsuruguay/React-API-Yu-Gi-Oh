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


    useEffect(() => {
        getListCards();
    }, [])


    //Luego de que el componente es montado
    /* useEffect(() => {
        setFilterList(cardListAPI)
    }, [cardListAPI]) */

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

    const handleChange = e => {
        let nuevaLista = [];
        /* e.target.id === "name-asc" && console.log(cardListAPI.sort(sortAsc));
        e.target.id === "name-desc" && console.log(cardListAPI.sort(sortDesc)) */
        /* e.target.id === "name-asc" && setFilterList(filterList.sort(sortAsc))
        e.target.id === "name-desc" && setFilterList(filterList.sort(sortDesc)) */
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

        /* e.target.id === "race-asc" && console.log(e.target.id);
        e.target.id === "race-desc" && console.log(e.target.id);
        e.target.id === "level-asc" && console.log(e.target.id);
        e.target.id === "level-desc" && console.log(e.target.id);
        e.target.id === "atk-asc" && console.log(e.target.id);
        e.target.id === "atk-desc" && console.log(e.target.id);
        e.target.id === "def-asc" && console.log(e.target.id);
        e.target.id === "def-desc" && console.log(e.target.id); */
        //console.log(filterList.sort(sortAsc));
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

    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Col md={10}>
                    <Section limitedListCards={cardListAPI}
                        filterList={filterList} />
                </Col>
                <Col>
                    <SideBar handleChange={handleChange} />
                </Col>
            </Row>
        </Container>
    );
}
