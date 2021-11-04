import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import SideBar from "../SideBar/SideBar";
import './Home.css';

export default function Home() {

    //Datos de API
    const [dataAPI, setDataAPI] = useState([]);

    //Lista que contiene 40 cards filtradas maximo.
    const [longListCards, setLongListCards] = useState([]);

    //Lista que se envia a los componentes con 20 cards maximo.
    const [smallListCards, setSmallListCards] = useState([]);

    //Estado para usar en btn show more Cards del SideBar
    const [showMoreCards, setShowMoreCards] = useState(false);

    //Estado para usar en btn Change Cards del SideBar
    const [changeCards, setChangeCards] = useState(false);

    //Buscador de NavBar
    const [searchValue, setSearchValue] = useState("");

    //Obtiene los datos de la API
    useEffect(() => {
        async function getDataApi() {
            const resul = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php");
            const resulData = resul.data;
            setDataAPI(resulData.data);
        }
        getDataApi();
    }, [])

    //Funcion que crea la lista random de cards
    const getRandomCardList = (numLimit = 40, datos) => {
        let i = 0;
        let cardList = [];
        while (i < numLimit) {
            cardList = [...cardList, datos[Math.floor(Math.random() * datos.length)]];
            i++;
        }
        setLongListCards(cardList);
        setSmallListCards(cardList.slice(0, 20));
    }

    //Lista de Race disponibles
    const raceList = ["Aqua", "Beast", "Creator-God", "Cyberse", "Dinosaur", "Divine-Beast", "Dragon", "Fairy", "Fiend", "Fish", "Insect", "Machine", "Plant", "Psychic", "Pyro", "Reptile", "Rock", "Sea Serpent", "Spellcaster", "Thunder", "Warrior", "Winged", "Normal", "Field", "Equip", "Continuous", "Quick-Play", "Ritual", "Counter"]

    //Función para ordenar o filtrar las cards
    const handleChange = e => {
        let nuevaLista = [];

        if (raceList.includes(e.target.value)) {
            getSearchByRace(e.target.value)
        }

        if (e.target.id === "name-asc") {
            nuevaLista = smallListCards.sort(sortAsc)
            setSmallListCards([...nuevaLista]);
        }
        if (e.target.id === "name-desc") {
            nuevaLista = smallListCards.sort(sortDesc)
            setSmallListCards([...nuevaLista]);
        }
        if (e.target.id === "race-asc") {
            nuevaLista = smallListCards.sort(sortRaceAsc)
            setSmallListCards([...nuevaLista]);
        }
        if (e.target.id === "race-desc") {
            nuevaLista = smallListCards.sort(sortRaceDesc)
            setSmallListCards([...nuevaLista]);
        }
        if (e.target.id === "level-asc") {
            nuevaLista = smallListCards.sort((a, b) => a.level - b.level)
            setSmallListCards([...nuevaLista]);
        }
        if (e.target.id === "level-desc") {
            nuevaLista = smallListCards.sort((a, b) => b.level - a.level)
            setSmallListCards([...nuevaLista]);
        }
        if (e.target.id === "atk-asc") {
            nuevaLista = smallListCards.sort((a, b) => a.atk - b.atk)
            setSmallListCards([...nuevaLista]);
        }
        if (e.target.id === "atk-desc") {
            nuevaLista = smallListCards.sort((a, b) => b.atk - a.atk)
            setSmallListCards([...nuevaLista]);
        }
        if (e.target.id === "def-asc") {
            nuevaLista = smallListCards.sort((a, b) => a.def - b.def)
            setSmallListCards([...nuevaLista]);
        }
        if (e.target.id === "def-desc") {
            nuevaLista = smallListCards.sort((a, b) => b.def - a.def)
            setSmallListCards([...nuevaLista]);
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

    const handleSearch = e => {
        setSearchValue(e.target.value);
    }

    //Evento OnClick de Button en Search
    const btnSearch = () => {
        getSearchValue(searchValue);
    }

    //Busca por name o por race en lista completa
    const getSearchValue = (terminoBusqueda) => {
        let resultadosBusqueda = dataAPI.filter((elemento) =>
            elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.race.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
        setLongListCards(resultadosBusqueda.slice(0, 40));
        setSmallListCards(resultadosBusqueda.slice(0, 20));
    }

    //Funcion para filtrar por race
    const getSearchByRace = (terminoBusqueda) => {
        let resultadosBusqueda = dataAPI.filter((elemento) =>
            elemento.race.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        );

        //Hace un random de los resultados
        getRandomCardList(50, resultadosBusqueda);
    }

    //Component will mount
    useEffect(() => {
        if (dataAPI.length !== 0) {
            getRandomCardList(40, dataAPI);
        }
    }, [dataAPI])

    //Cambia el estado segun click boton moreCards en SideBar
    const showMore = () => {
        setShowMoreCards(!showMoreCards)
    }

    //Hace el seguimiento al estado showMoreCards
    useEffect(() => {
        showMoreCards ? setSmallListCards(longListCards) : setSmallListCards(longListCards.slice(0, 20));
    }, [showMoreCards, longListCards])

    //Funcion para btn Change Cards de SideBar
    const btnChangeCards = () => {
        setChangeCards(!changeCards)
    }
    useEffect(() => {
        changeCards && getRandomCardList(40, dataAPI);
        setChangeCards(false);
    }, [changeCards, dataAPI])


    return (
        <Container fluid className="cont-home">
            <NavBar handleSearch={handleSearch} searchValue={searchValue} btnSearch={btnSearch} />
            <Row>
                <Col md={10}>
                    <Section filterList={smallListCards} />
                </Col>
                <Col xs={{ order: 'first' }}>
                    <SideBar handleChange={handleChange} showMore={showMore} showMoreCards={showMoreCards} btnChangeCards={btnChangeCards} raceList={raceList} />
                </Col>
            </Row>
        </Container>
    );
}
