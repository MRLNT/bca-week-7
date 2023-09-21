import React, { useEffect, useState } from 'react';
import './home.css'
import Navbar from '../../components/navbar/navbar';
import Card from '../../components/card/card';
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([])
    const getData = async () => {
        try {
            const data = await axios.get('http://hplussport.com/api/products/order/price')
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
                    {/* card product */}
                    <Card 
                        imgProd={
                            "https://images.unsplash.com/photo-1691135319989-8ae7dd70571a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1904&q=80"
                        }
                        price={`Rp ${100}`}
                        name={"Mobil"}
                    />
                    {products.map(p => {
                        return (
                            <Card
                                key={p.id}
                                imgProd={p.image}
                                price={p.price}
                                name={p.name}
                            />
                        )
                    })}
                </section>
            </main>
        </div>
    );
};

export default Home;