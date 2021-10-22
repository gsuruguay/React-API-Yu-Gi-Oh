import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
//import './Details.css';

function Details(props) {
	const params = useParams();
	const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${params.id}`
	console.log(params);

	const [wantedCard, setWantedCard] = useState(null);

	useEffect(() => {
		async function getCardParam (){
			const resul = await axios.get(url);
	
			const resulCards = resul.data;
			setWantedCard(resulCards);
			console.log(resulCards.data[0].name);
		}
		getCardParam();
	}, [url])




	/* const params = useParams();
	const selected = props.filterList.find((element) => element.id === parseInt(params.id));

	console.log(selected);
 */


	/* const history = useHistory();
	const back = () => {
		history.push("/");
	}; */

	return (
		<>
			<p>
				{wantedCard && wantedCard?.data[0].name}
				{wantedCard && wantedCard?.data[0].race}
				{wantedCard && wantedCard?.data[0].level}
			</p>
			HOLA MUNDO
			</>
	);
}
export default Details;
