import { Form, Button } from 'react-bootstrap';

export default function SideBar(props) {
    return (
        <aside className="mt-5 pt-5 cont-sidebar" style={{ color: '#e3e198' }}>
            <h3>Search filters</h3>
            {/* Boton para cambiar las tarjetas mostradas */}
            <Button variant="outline-danger" onClick={props.btnChangeCards} className="mb-4">Change cards</Button>
            {/* Boton para mostrar 20 o 40 cards */}
            {props.showMoreCards ?
                <Button variant="outline-secondary" onClick={props.showMore}>Show fewer cards</Button>
                :
                <Button variant="outline-secondary" onClick={props.showMore}>Show more cards</Button>
            }
            <Form className="mt-3" onChange={props.handleChange}  >
                <div className="mb-4">
                    <h5>Sort by name</h5>
                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="name-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="name-desc"
                    />
                </div>
                <div className="mb-4">
                    <h5>Sort by race</h5>

                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="race-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="race-desc"
                    />
                </div>
                <div className="mb-4">
                    <h5>Sort by level</h5>

                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="level-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="level-desc"
                    />
                </div>
                <div className="mb-4">
                    <h5>Sort by ATK</h5>

                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="atk-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="atk-desc"
                    />
                </div>
                <div className="mb-4">
                    <h5>Sort by DEF</h5>

                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="def-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="def-desc"
                    />
                </div>
            </Form>
        </aside>
    );
}