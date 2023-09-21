import React, { useEffect, useState } from 'react';
import './home.css'
import Navbar from '../../components/navbar/navbar';
import Card from '../../components/card/card';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            const data = await axios.get('http://hplussport.com/api/products');
            console.log(data, "from axios");
            console.log(data.data, "datanya");
            setProducts(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className='container'>
            {/* navbar */}
            <Navbar />
            {/* main section */}
            <main>
                <section className='header'>
                    <h2>Products</h2>
                    <div className="input">
                        <input type="text" name='search' id='search' />
                    </div>
                </section>
                <section className="prod">
                    {products.map((p) => {
                        return (
                            <Card
                                key={p.id}
                                imgProd={p.image}
                                price={p.price}
                                name={p.name}
                                id={p.id}
                            />
                        );
                    })}
                </section>
            </main>
        </div>
    );
};

export default Home;