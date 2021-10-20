import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
//import axios from "axios";
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import cards from "../../cardinfo.json";
import SideBar from "../SideBar/SideBar";

//import "./Home.css";

export default function Home() {

    //Se filtra en base a esta lista
    const [cardListAPI, setCardListAPI] = useState([]);

    //Lista que se envia a los componentes
    const [filterList, setFilterList] = useState([]);

    //Estado para usar en boton show more Cards del SideBar
    const [showMoreCards, setShowMoreCards] = useState(false);

    //Buscado de NavBar
    const [searchValue, setSearch] = useState("");

    const getListCards = (numLimit = 20, datos = cards.data) => {
        let i = 0;
        let cardList = [];
        while (i < numLimit) {
            cardList = [...cardList, datos[Math.floor(Math.random() * datos.length)]];
            i++;
        }
        setCardListAPI(cardList);
        setFilterList(cardList);
    }

    //Función para ordenar las cards de forma ASC o DESC
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
            nuevaLista = cardListAPI.sort((a, b) => a.level - b.level)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "level-desc") {
            nuevaLista = cardListAPI.sort((a, b) => b.level - a.level)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "atk-asc") {
            nuevaLista = cardListAPI.sort((a, b) => a.atk - b.atk)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "atk-desc") {
            nuevaLista = cardListAPI.sort((a, b) => b.atk - a.atk)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "def-asc") {
            nuevaLista = cardListAPI.sort((a, b) => a.def - b.def)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "def-desc") {
            nuevaLista = cardListAPI.sort((a, b) => b.def - a.def)
            setFilterList([...nuevaLista]);
        }
    }

    const sortAsc = (x, y) => {
        if (x.name < y.name) return -1;
        if (x.name > y.name) return 1;
        return 0;
    }
    const sortDesc = (x, y) => {
        if (x.name > y.name) return -1;
        if (x.name < y.name) return 1;
        return 0;
    }
    const sortRaceAsc = (x, y) => {
        if (x.race < y.race) return -1;
        if (x.race > y.race) return 1;
        return 0;
    }
    const sortRaceDesc = (x, y) => {
        if (x.race > y.race) return -1;
        if (x.race < y.race) return 1;
        return 0;
    }

    const showMore = () => {
        setShowMoreCards(!showMoreCards)
    }

    //Funcion del buscador NO FUNCIONO
    //const searchByName = async (termino) => {
    /* const response = await axios.get("");
    const data = response.data; */
    //axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${termino}`)
    /* .then(res => {
      const resulCards = res.data;
      this.setState({ resulCards });
      getListCards(20, resulCards);
    }) */
    //}

    const searchChange = e => {
        setSearch(e.target.value);
        //filtrar(e.target.value);
    }

    //Evento OnClick de Button en Search
    const btnSearch = () => {
        getFilterCards(searchValue);
    }

    //Filtra por name o por race desde json en cards
    const getFilterCards = (terminoBusqueda) => {
        let resultadosBusqueda = cards.data.filter((elemento) => 
            elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.race.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
        //setFilterList(resultadosBusqueda);
        getListCards(20, resultadosBusqueda);
    }

    //Component Did mount
    useEffect(() => {
        getListCards();
    }, [])

    //Component Did Update
    useEffect(() => {
        showMoreCards ? getListCards(40) : getListCards();
    }, [showMoreCards])

    return (
        <Container fluid>
            <NavBar searchChange={searchChange} searchValue={searchValue} btnSearch={btnSearch} />
            <Row>
                <Col md={10}>
                    <Section limitedListCards={cardListAPI} filterList={filterList} />
                </Col>
                <Col>
                    <SideBar handleChange={handleChange} showMore={showMore} showMoreCards={showMoreCards} />
                </Col>
            </Row>
        </Container>
    );
}
