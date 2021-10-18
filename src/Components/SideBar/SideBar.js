import { Form } from 'react-bootstrap';
//import "./SideBar.css";

export default function SideBar() {

    return (
        <aside className="mt-5 pt-5">
            <h3>Search filters</h3>
            <div className="mb-4">
                <h5>Sort by name</h5>
                <Form>
                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="order-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="order-desc"
                    />
                </Form>
            </div>
            <div className="mb-4">
                <h5>Sort by race</h5>
                <Form>
                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="order-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="order-desc"
                    />
                </Form>
            </div>
            <div className="mb-4">
                <h5>Sort by level</h5>
                <Form>
                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="order-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="order-desc"
                    />
                </Form>
            </div>
            <div className="mb-4">
                <h5>Sort by ATK</h5>
                <Form>
                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="order-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="order-desc"
                    />
                </Form>
            </div>
            <div className="mb-4">
                <h5>Sort by DEF</h5>
                <Form>
                    <Form.Check
                        inline
                        label="ASC"
                        name="order"
                        type="radio"
                        id="order-asc"
                    />
                    <Form.Check
                        inline
                        label="DESC"
                        name="order"
                        type="radio"
                        id="order-desc"
                    />
                </Form>
            </div>
        </aside>
    );
}