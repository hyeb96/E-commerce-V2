import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';


const ProductCards = () => {
    const [data, setData] = useState([])
    // const loadData = async () => {
    //     const response = await axios.get('/products');
    //     setData(response.data);
    // };

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        return await axios
            .get('https://e-commerce-v2-react.herokuapp.com/products')
            .then((response) => setData(response.data))
            .catch((err) => console.log(err))
    };
    console.log("data", data)

    const handleFilter = async (value) => {
        return await axios
            .get(`https://e-commerce-v2-react.herokuapp.com/products/category=${value}`)
            .then((response) => {
                setData(response.data)
            })
            .catch((err) => console.log(err))
    };

    return (
        <>
            <div className='filter'>
                {/* <button onClick={() => handleFilter('all')}>All</button> */}
                <button onClick={() => handleFilter('accessory')}>Accessory</button>
                <button onClick={() => handleFilter('stationary')}>Stationary</button>
                <button onClick={() => handleFilter('plants')}>Plants</button>
            </div>

            {data.map((item, index) => {
                return (
                    <>
                        <div className='cards'>
                            <div className='items'></div>
                            <h1 className='title'>{item.name}</h1>
                            <img src={item.image}></img>
                            <div>{item.image}</div>
                            <span>${item.price}</span>
                            <p className='item-description'>{item.description}</p>
                        </div>
                    </>
                )
            })}
        </>
    );
};

export default ProductCards;