import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="card-container">
      <div className="image">
        <img src={props.imgProd} alt="img" />
        <p>{props.price}</p>
      </div>
      <div className="desc">
        <Link to={`/product/${props.id}`}>
            <p>{props.name}</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
