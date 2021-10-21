import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
	return (
		<div class="container bg-black ">
			<footer class=" bg-black text-center  text-danger">
				<div class="container p-4 pb-0">
					<section class="">
						<div class="row">
							<div class="col-lg-6 col-md-6 mb-4 mb-md-0">
								<h5 class="text-uppercase">Yu-Gi-Oh</h5>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi cum ipsam
									ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
									eaque? Reiciendis assumenda iusto sapiente inventore animi?
								</p>
							</div>

							<div class="col-lg-6 col-md-6 mb-4 mb-md-0">
								<h5 class="text-uppercase">About us</h5>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi cum ipsam
									ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
									eaque? Reiciendis assumenda iusto sapiente inventore animi?
								</p>
							</div>
						</div>
					</section>

					<hr class="mb-4" />

					<section class="">
						<p class="d-flex justify-content-center align-items-center">
							<span class="me-3">CONTACT US</span>
							<button type="button" class="btn btn-outline-light btn-rounded">
								Contact us
							</button>
							{/*<NavLink class="btn btn-outline-light btn-rounded" exact to="/Contacts">
								Contact Us
							</NavLink>*/}
						</p>
					</section>

					<hr class="mb-4" />

					<section class="container d-flex justify-content-center py-1">
						<p class=" dark-grey-text">
							<a href="mailto:guillermo.suruguay@gmail.com" target="blank">
								<img
									src="https://i.postimg.cc/9XKvWZXR/logo-gmail.png"
									alt=""
									width="50px"
									height="auto"
								/>
							</a>
							<a href="https://github.com/gsuruguay" target="blank">
								<img
									src="https://i.postimg.cc/zXh43v3d/logo-github.png"
									alt=""
									width="50px"
									height="auto"
								/>
							</a>
							<a href="https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web/" target="blank">
								<img
									src="https://i.postimg.cc/nzMPxc6G/logo-linkedin.png"
									alt=""
									width="30px"
									height="auto"
								/>
							</a>
						</p>

						<p class=" dark-grey-text">
							<a href="mailto:lourdes.aa088@gmail.com" target="blank">
								<img
									src="https://i.postimg.cc/9XKvWZXR/logo-gmail.png"
									alt=""
									width="50px"
									height="auto"
								/>
							</a>
							<a href="https://github.com/LourAlvarez" target="blank">
								<img
									src="https://i.postimg.cc/zXh43v3d/logo-github.png"
									alt=""
									width="50px"
									height="auto"
								/>
							</a>
							<a href="https://www.linkedin.com/in/lourdes-alvarez-ba1511223/" target="blank">
								<img
									src="https://i.postimg.cc/nzMPxc6G/logo-linkedin.png"
									alt=""
									width="30px"
									height="auto"
								/>
							</a>
						</p>
					</section>
				</div>

				<div class="text-center p-3">© Yu-Gi-Oh 2021 React</div>
			</footer>
		</div>
	);
}
