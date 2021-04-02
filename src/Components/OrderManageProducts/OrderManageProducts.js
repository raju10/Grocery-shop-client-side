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
  //////////////////////
  //   useEffect(() => {
  //     // DELETE request using fetch with async/await
  //     async function deletePost() {
  //         await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' });
  //         setStatus('Delete successful');
  //     }

  //     deletePost();
  // }, []);
  //////////////////
  // function deleteProduct(id) {
  //   fetch(`/delete/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("deleted successfully");
  //     });
  //   console.log(id);
  // }
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
                <button onClick={() => hendelPrdDeleted(props.pd._id)}>
                  Deleted
                </button>
              </td>
            </tr>
            {/* <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
          </tbody>
        </Table>

        {/* <img src={img} alt="" className="w-25" />
      <h1>{name}</h1>
      <h2>{userName}</h2>
      <p>{email}</p>
      <p>price : {price}</p> */}
      </Container>
    </div>
  );
};

export default OrderManageProducts;
