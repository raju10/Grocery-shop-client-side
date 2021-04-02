import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SelectProductContext, UserContext } from "../../App";
import "./Products.css";
const Products = (props) => {
  const { name, imgUrl, price } = props.prd;

  const [selcProducts, setSelcProducts] = useContext(SelectProductContext);

  const [loginUser, setLoginUser] = useContext(UserContext);

  return (
    <div className="products-container col-sm-3">
      <img src={imgUrl} alt="" className="w-50" />
      <h3>
        <strong>Product-Name :</strong> {name}
      </h3>
      <h4>
        <strong> Price : </strong> {price}
      </h4>
      <Link to="/order">
        <button
          onClick={() =>
            setSelcProducts({
              ...selcProducts,
              name: name,
              img: imgUrl,
              price: price,
            })
          }
          className="btn btn-success"
        >
          Buy Now
        </button>
      </Link>
    </div>
  );
};

export default Products;
