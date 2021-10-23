import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Details.css';

export default function Details(props) {
	const params = useParams();
	const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${params.id}`
	console.log(params);

	const [wantedCard, setWantedCard] = useState(null);

	useEffect(() => {
		async function getCardParam() {
			const resul = await axios.get(url);

			const resulCards = resul.data;
			console.log(resulCards);
			setWantedCard(resulCards);
			console.log(resulCards.data[0].name);
		}
		getCardParam();
	}, [url])

	/* Funcion filtra sobre json de datos 
	const selected = cards.find((element) => element.id === parseInt(params.id));
	console.log(selected);
 */

	return (
		<Container fluid className="cont-detail">
			<Row className="mt-5 pt-5 ">
				<Col md={6} className="cont-image-detail text-center">
					<Image src={wantedCard && wantedCard?.data[0].card_images[0].image_url} alt="Yu-Gi-Oh" />
				</Col>
				<Col className="cont-info-detail" md={4}>
					<div> <b>
						Name:</b> {wantedCard && wantedCard?.data[0].name}
					</div>
					<div> <b>
						Race:</b> {wantedCard && wantedCard?.data[0].race}
					</div>
					<div> <b>
						Type:</b> {wantedCard && wantedCard?.data[0].type}
					</div>
					<div> <b>
						Level:</b> {wantedCard && wantedCard?.data[0].level}
					</div>
					<div> <b>
						ATK:</b> {wantedCard && wantedCard?.data[0].atk}
					</div>
					<div> <b>
						DEF:</b> {wantedCard && wantedCard?.data[0].def}
					</div>
					<div>
						{wantedCard && wantedCard?.data[0].desc}
					</div>
					<div><b>
						Amazon Price: </b>
						${wantedCard && wantedCard?.data[0].card_prices[0].amazon_price}
					</div>
					<div><b>
						Ebay Price: </b>
						${wantedCard && wantedCard?.data[0].card_prices[0].ebay_price}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

