// import './card.css'

// function Card(imgProd, price, name) {
//   return (
//     <div className="card-container">
//         <div className="image">
//             <img src={imgProd} alt="img" />
//             <p>{price}</p>
//         </div>
//         <div className="desc">
//             <a href="#">
//                 <p>{name}</p>
//             </a>
//         </div>
//     </div>
//   )
// }

// export default Card

import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="card-container">
      <div className="image">
        <img src={props.imgProd} alt="img" />
        <p>{props.price}</p>
      </div>
      <div className="desc">
        <a href="#">
          <p>{props.name}</p>
        </a>
      </div>
    </div>
  );
}

export default Card;
