import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
	return (
		<Container fluid className="bg-black">
			<footer className="bg-black text-center text-danger">
				<div className="container p-4 pb-0">
					<hr className="mb-4" />
					<div className="">
						<Link className="link-ToContact" to="/contact">
							CONTACT US
						</Link>
					</div>
					<hr className="mb-4" />
					<Container>
						<Row>
						<Col className="logo-footer">
								Dev: Guillermo Suruguay
								<a href="mailto:guillermo.suruguay@gmail.com">
									<img
										src="https://i.postimg.cc/y6hMkbR5/logo-gmail-2.png"
										alt="logo gmail"
										width="40px"
									/>
								</a>
								<a href="https://github.com/gsuruguay" rel="noreferrer" target="_blank">
									<img
										src="https://i.postimg.cc/1zHFgP9X/logo-github-2.png"
										alt="logo github"
										width="40px"
									/>
								</a>
								<a href="https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web/" rel="noreferrer" target="_blank">
									<img
										src="https://i.postimg.cc/nzMPxc6G/logo-linkedin.png"
										alt="logo Linkedin"
										width="35px"
									/>
								</a>
							</Col>
							<Col className="logo-footer">
								Dev: Lourdes Alvarez
								<a href="mailto:lourdes.aa088@gmail.com">
									<img
										src="https://i.postimg.cc/y6hMkbR5/logo-gmail-2.png"
										alt="logo gmail"
										width="40px"
									/>
								</a>
								<a href="https://github.com/LourAlvarez" rel="noreferrer" target="_blank">
									<img
										src="https://i.postimg.cc/1zHFgP9X/logo-github-2.png"
										alt="logo github"
										width="40px"
									/>
								</a>
								<a href="https://www.linkedin.com/in/lourdes-alvarez-ba1511223/" rel="noreferrer" target="_blank">
									<img
										src="https://i.postimg.cc/nzMPxc6G/logo-linkedin.png"
										alt="logo Linkedin"
										width="35px"
									/>
								</a>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="text-center p-3">©Yu-Gi-Oh 2021 React</div>
			</footer>
		</Container>
	);
}