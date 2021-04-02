import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
// import allProductsData from "../Data/Data.json";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log("my products", products);
  // useEffect(() => {
  //   setProducts(allProductsData);
  // }, []);
  useEffect(() => {
    fetch("http://localhost:1000/events")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Container>
      <Row>
        {products.map((prd) => (
          <Products prd={prd}></Products>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
