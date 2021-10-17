//import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Section from '../Section/Section';
//import "./Home.css";

export default function Home() {

    /* const [cardListAPI, setCardListAPI] = useState([]); */

    return (
        <Container fluid>
            <NavBar />
            <Section />
        </Container>
    );
}
