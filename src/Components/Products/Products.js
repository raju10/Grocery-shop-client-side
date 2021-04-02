import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SelectProductContext, UserContext } from "../../App";
import "./Products.css";
const Products = (props) => {
  const { name, imgUrl, price } = props.prd;

  const [selcProducts, setSelcProducts] = useContext(SelectProductContext);
  // const [productss, setProductss] = useState({});
  // console.log("productss", productss);
  const [loginUser, setLoginUser] = useContext(UserContext);
  // console.log(loginUser);
  //////////
  //  const finals = {...loginUser, }
  //////////////
  // console.log(selcProducts);
  // const handelAddProduct = (pd) => {
  //   console.log("yo", pd);
  //   setProductss(pd);
  // };

  return (
    <div className="products-container col-sm-3">
      <img src={imgUrl} alt="" className="w-50" />
      <h2>
        <strong>Product-Name :</strong> {name}
      </h2>
      <h1>
        <strong> Price : </strong> {price}
      </h1>
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
          // onClick={() => handelAddProduct(props.prd)}
          className="btn btn-success"
        >
          Buy Now
        </button>
      </Link>
    </div>
  );
};

export default Products;
