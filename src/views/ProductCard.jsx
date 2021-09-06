import React from "react";
import productOne from "../images/product.jpg";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { _id, title, price, description } = props.item;
  return (
    <div className="productCard">
      <div className="img">
        <img src={productOne}></img>
      </div>
      <div className="productContent">
        <div>
          <h3 className="productTitle">{title || `Title`}</h3>
        </div>
        <div className="productPrice">₦{price}</div>
        <div>{description}</div>
        <div>
          <Link to={`/product/${_id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
