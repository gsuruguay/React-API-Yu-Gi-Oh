import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
import cards from "../../cardinfo.json";
import SideBar from "../SideBar/SideBar";
import './Home.css';

export default function Home() {

    //Lista que contiene 40 cards filtradas maximo.
    const [cardListAPI, setCardListAPI] = useState([]);

    //Lista que se envia a los componentes con 20 cards maximo.
    const [filterList, setFilterList] = useState([]);

    //Estado para usar en btn show more Cards del SideBar
    const [showMoreCards, setShowMoreCards] = useState(false);

    //Estado para usar en btn Change Cards del SideBar
    const [changeCards, setChangeCards] = useState(false);

    //Buscador de NavBar
    const [searchValue, setSearchValue] = useState("");

    //Filtro de Precios
    const [filterEbayPrice, setFilterEbayPrice] = useState({
        min: "",
        max: ""
    });
    /*     const [filterAmazonPrice, setFilterAmazonPrice] = useState({
            min: "",
            max: ""
        }); */

    //Funcion que crea la lista random de cards
    const getRandomCardList = (numLimit = 40, datos = cards.data) => {
        let i = 0;
        let cardList = [];
        while (i < numLimit) {
            cardList = [...cardList, datos[Math.floor(Math.random() * datos.length)]];
            i++;
        }
        setCardListAPI(cardList);
        setFilterList(cardList.slice(0, 20));
    }

    const raceList = ["Aqua", "Beast", "Creator-God", "Cyberse", "Dinosaur", "Divine-Beast", "Dragon", "Fairy", "Fiend", "Fish", "Insect", "Machine", "Plant", "Psychic", "Pyro", "Reptile", "Rock", "Sea Serpent", "Spellcaster", "Thunder", "Warrior", "Winged", "Normal", "Field", "Equip", "Continuous", "Quick-Play", "Ritual", "Counter"]

    //Función para ordenar o filtrar las cards
    const handleChange = e => {
        console.log("id", e.target.id);
        console.log("value", e.target.value);
        let nuevaLista = [];

        if (raceList.includes(e.target.value)) {
            getSearchByRace(e.target.value)
        }

        if (e.target.id === "name-asc") {
            nuevaLista = filterList.sort(sortAsc)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "name-desc") {
            nuevaLista = filterList.sort(sortDesc)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "race-asc") {
            nuevaLista = filterList.sort(sortRaceAsc)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "race-desc") {
            nuevaLista = filterList.sort(sortRaceDesc)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "level-asc") {
            nuevaLista = filterList.sort((a, b) => a.level - b.level)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "level-desc") {
            nuevaLista = filterList.sort((a, b) => b.level - a.level)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "atk-asc") {
            nuevaLista = filterList.sort((a, b) => a.atk - b.atk)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "atk-desc") {
            nuevaLista = filterList.sort((a, b) => b.atk - a.atk)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "def-asc") {
            nuevaLista = filterList.sort((a, b) => a.def - b.def)
            setFilterList([...nuevaLista]);
        }
        if (e.target.id === "def-desc") {
            nuevaLista = filterList.sort((a, b) => b.def - a.def)
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

    //Funcion del buscador falta mejorar con axios
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

    const handleSearch = e => {
        setSearchValue(e.target.value);
    }

    //Evento OnClick de Button en Search
    const btnSearch = () => {
        getSearchValue(searchValue);
    }

    //Busca por name o por race desde json en cards
    const getSearchValue = (terminoBusqueda) => {
        let resultadosBusqueda = cards.data.filter((elemento) =>
            elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.race.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
        setCardListAPI(resultadosBusqueda.slice(0, 40));
        setFilterList(resultadosBusqueda.slice(0, 20));
    }

    //Filtro por race
    const getSearchByRace = (terminoBusqueda) => {
        let resultadosBusqueda = cards.data.filter((elemento) =>
            elemento.race.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        );

        //Hace un random de los resultados
        getRandomCardList(50, resultadosBusqueda);
    }

    //Filtro por PRICE
    const handleFilterPrice = (e) => {
        setFilterEbayPrice({
            ...filterEbayPrice,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }

    const getFilterByEbayPrice = () => {
        console.log(filterEbayPrice);
        filterByEbayPrice();
    }

    /* const getFilterByAmazonPrice = ()=>{
        console.log(filterAmazonPrice);
        filterByAmazonPrice();
    } */

    const filterByEbayPrice = () => {
        let resultadosBusqueda = cards.data.filter((elemento) =>
            (parseFloat(elemento.card_prices[0].ebay_price) > parseInt(filterEbayPrice.min) && parseFloat(elemento.card_prices[0].ebay_price) < parseInt(filterEbayPrice.max))
        );
        console.log(resultadosBusqueda);

        setCardListAPI(resultadosBusqueda.slice(0, 40));
        setFilterList(resultadosBusqueda.slice(0, 20));

        //Hace un random de los resultados
        /* getRandomCardList(50, resultadosBusqueda); */
    }

    /* const filterByAmazonPrice = () => {
        let resultadosBusqueda = cards.data.filter((elemento) =>
            parseFloat(elemento.card_prices[0].amazon_price) > parseInt(filterPrice.min) && parseFloat(elemento.card_prices[0].amazon_price) < parseInt(filterPrice.max)
        );
    //Hace un random de los resultados
    getRandomCardList(50, resultadosBusqueda);
    }*/

//Component Did mount
useEffect(() => {
    getRandomCardList();
}, [])

//Cambia el estado segun click boton moreCards en SideBar
const showMore = () => {
    setShowMoreCards(!showMoreCards)
}

//Hace el seguimiento al estado showMoreCards
useEffect(() => {
    showMoreCards ? setFilterList(cardListAPI) : setFilterList(cardListAPI.slice(0, 20));
}, [showMoreCards, cardListAPI])

//Funcion para btn Change Cards de SideBar
const btnChangeCards = () => {
    setChangeCards(!changeCards)
}
useEffect(() => {
    changeCards ? getRandomCardList(40) : getRandomCardList();
    setChangeCards(false);
}, [changeCards])


return (
    <Container fluid className="cont-home">
        <NavBar handleSearch={handleSearch} searchValue={searchValue} btnSearch={btnSearch} />
        <Row>
            <Col md={10}>
                <Section filterList={filterList} />
            </Col>
            <Col xs={{ order: 'first' }}>
                <SideBar handleChange={handleChange} showMore={showMore} showMoreCards={showMoreCards} btnChangeCards={btnChangeCards} raceList={raceList} getFilterByEbayPrice={getFilterByEbayPrice} handleFilterPrice={handleFilterPrice} /* getFilterByAmazonPrice={getFilterByAmazonPrice} */ />
            </Col>
        </Row>
    </Container>
);
}
