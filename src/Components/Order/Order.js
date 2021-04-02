import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SelectProductContext, UserContext } from "../../App";

const Order = () => {
  const [selcProducts, setSelcProducts] = useContext(SelectProductContext);
  console.log(selcProducts);
  const [loginUser, setLoginUser] = useContext(UserContext);
  console.log(loginUser);
  //////////////////////

  const handelOrder = () => {
    const datas = { ...selcProducts, ...loginUser, date: new Date() };
    console.log("all datas", datas);
    fetch("http://localhost:1000/addOrderEvents", {
      method: "post",
      body: JSON.stringify(datas),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert("your order placed succesfully");
        }
      });
  };
  //////////////////////////////
  return (
    <div>
      <div>
        <nav>
          <Link to="/manageProducts">
            <button onClick={handelOrder} className="btn btn-primary">
              Manage products
            </button>
          </Link>
        </nav>
      </div>
      {/* <h1>Check Out</h1>
      <h4>
        <strong> Email :</strong> {loginUser.email}
        {""} & <strong>Name : </strong>
        {loginUser.userName}
      </h4>

      <img src={selcProducts.img} alt="" className="w-25" />
      <h2>name : {selcProducts.name}</h2>
      <h1>price : {selcProducts.price} </h1> */}

      {/*  */}
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Your name & Email Address</th>
              <th>Your Product</th>
              <th>Your product Name</th>
              <th>Product price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                {" "}
                <h4>
                  <strong> Email :</strong> {loginUser.email}
                  {""} & <strong>Name : </strong>
                  {loginUser.userName}
                </h4>
              </td>
              <td>
                <img src={selcProducts.img} alt="" id="product-img" />
              </td>
              <td>
                {" "}
                <h4>{selcProducts.name}</h4>
              </td>
              <td>
                {" "}
                <p>price : {selcProducts.price}</p>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* {selcProducts !== selcProducts.price &&
        selcProducts !== selcProducts.name ? (
          <Link to="/home">please</Link>
        ) : (
          "ok"
        )} */}
      </Container>
    </div>
  );
};

export default Order;
