import React from 'react';
//import { useParams, useHistory } from 'react-router';
//import './Details.css';

function Details(props) {

	/* const params = useParams();
	const selected = props.filterList.find((element) => element.id === parseInt(params.id));

	console.log(selected);
 */

	/* const history = useHistory();
	const back = () => {
		history.push("/");
	}; */

	return (
		<div className="row text-center col-12 bg-dark">

			<div class="card-div text-center">
				<div class="card__content">
					<div class="card__front">
						<h3 class="card__title">Yu-Gi-Oh</h3>
						<p class="card__subtitle">El rey de los juegos</p>
					</div>

					<div class="card__back">
						<p class="card__body">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolorem eligendi sequi assumenda sed. Minus quae veniam nostrum ipsam, voluptas sapiente perferendis, odio placeat reiciendis, hic numquam ex at? Neque?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Details;
