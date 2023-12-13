import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const data = useSelector((state) => state.cartSlice.cart);
  const { id } = useParams();
  const filterdata = data.filter((product) => product.id == id);
  console.log(filterdata);
  const renderSpecifications = (specs) => {
    return (
      <ul>
        {Object.entries(specs).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="pro-container">
      {filterdata.map((product) => (
        <div key={product.id}>
          <div className="image-name"><div>
            <img className="products-image" src={product.image} />
          </div>
          <div>{product.title}</div></div>
          <div className="pro-details">
          <div>Price: ${product.price}</div> 
         <div> {renderSpecifications(product.specs)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
