import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "./OrderManageProducts.css";
const OrderManageProducts = (props) => {
  //////////////////////
  const hendelPrdDeleted = (id) => {
    console.log("pd", id);
    if (id) {
      fetch(`/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("deleted successfully", data);
        });
    }
  };
  /////////////////////////
  const { name, email, img, userName, price } = props.pd;
  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th>product Name</th>
              <th>price</th>
              <th>Email Address</th>
              <th>Product Deleted</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img src={img} alt="" id="product-img" />
              </td>
              <td>
                {" "}
                <h4>{name}</h4>
              </td>
              <td>
                {" "}
                <p>price : {price}</p>
              </td>
              <td>{email}</td>
              <td>
                <button
                  onClick={() => hendelPrdDeleted(props.pd._id)}
                  className="btn btn-danger"
                >
                  Deleted
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default OrderManageProducts;
