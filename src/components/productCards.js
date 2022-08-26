import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const ProductCards = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        return await axios
            .get('https://e-commercev2-backend.herokuapp.com/products')
            .then((response) => setData(response.data))
            .catch((err) => console.log(err))
    };
    console.log("data", data)

    const handleFilter = async (value) => {
        return await axios
            .get(`https://e-commercev2-backend.herokuapp.com/products/category=${value}`)
            .then((response) => {
                setData(response.data)
            })
            .catch((err) => console.log(err))
    };

    const handleReset = () => {
        loadData();
    };

    return (
        <>
            <div className='filter'>
                <h3>Filter:</h3>
                <button className='filter-btn' onClick={() => handleReset()}>All</button>
                <button className='filter-btn' onClick={() => handleFilter('accessory')}>Accessory</button>
                <button className='filter-btn' onClick={() => handleFilter('stationary')}>Stationary</button>
                <button className='filter-btn' onClick={() => handleFilter('plants')}>Plants</button>
            </div>

            <div class='container'>
                <Row xs={1} md={3} className="g-4">
                    {data.map((item, index) => {
                        return (
                            <>
                                <Col>
                                    <Card className='card'>
                                        <Card.Body>
                                            <Card.Title><h1 className='title'>{item.name}</h1></Card.Title>
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Text>
                                                <h2 className='price'>${item.price}</h2>
                                                <p className='item-description'>{item.description}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <button id='cart-btn'>Add to cart</button>
                                    </Card>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </div>
        </>
    );
};

export default ProductCards;