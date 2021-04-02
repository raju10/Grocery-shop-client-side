import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";

import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log("my products", products);

  useEffect(() => {
    fetch("http://localhost:1000/events")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div style={{ background: "#80808047" }}>
      <Container>
        <Row>
          {products.map((prd) => (
            <Products prd={prd}></Products>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
