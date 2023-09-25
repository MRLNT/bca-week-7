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
        {/* <Link to={`/product/${id}`}> */}
        <p>{props.name}</p>
        {/* </Link> */}
      </div>
      <div className="action d-flex justify-content-between">
        <Link to={`/product/${props.id}`}>See Detail</Link>
        <Link to={`/edit-product/${props.id}`}>Update Data</Link>
      </div>
    </div>
  );
}

export default Card;
