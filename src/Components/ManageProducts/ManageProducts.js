import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { SelectProductContext, UserContext } from "../../App";
import OrderManageProducts from "../OrderManageProducts/OrderManageProducts";

const ManageProducts = () => {
  const [selcProducts, setSelcProducts] = useContext(SelectProductContext);
  const [products, setProducts] = useState([]);
  console.log("raju", products);
  const [loginUser, setLoginUser] = useContext(UserContext);
  console.log("loginuser", loginUser);

  /////////////////
  useEffect(() => {
    fetch("http://localhost:1000/OrderEventss?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Container>
      <h1>See on your order product</h1>

      {products.map((pd) => (
        <OrderManageProducts pd={pd}></OrderManageProducts>
      ))}
    </Container>
  );
};

export default ManageProducts;
