import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AdmainAllPrdEdtngAndManage from "../AdmainAllPrdEdtngAndManage/AdmainAllPrdEdtngAndManage";
import "./AdmainManagesAllPrd.css";
const AdmainManagesAllPrd = () => {
  const [addAllProducts, setAddAllProducts] = useState([]);
  console.log("yoyooyo", addAllProducts);
  useEffect(() => {
    fetch("http://localhost:1000/events")
      .then((res) => res.json())
      .then((data) => {
        setAddAllProducts(data);
      });
  }, []);
  return (
    <Container>
      <thead
        className="table"
        style={{ background: "#174431f2", color: "white" }}
      >
        <tr>
          <th>Product</th>
          <th>product Name & Price</th>

          <th>Deleted/product</th>
        </tr>
      </thead>
      {addAllProducts.map((pd) => (
        <AdmainAllPrdEdtngAndManage pd={pd}></AdmainAllPrdEdtngAndManage>
      ))}
    </Container>
  );
};

export default AdmainManagesAllPrd;
