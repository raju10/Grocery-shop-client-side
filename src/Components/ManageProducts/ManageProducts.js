import React, { useContext, useEffect, useState } from "react";
import { SelectProductContext, UserContext } from "../../App";
import OrderManageProducts from "../OrderManageProducts/OrderManageProducts";

const ManageProducts = () => {
  const [selcProducts, setSelcProducts] = useContext(SelectProductContext);
  const [products, setProducts] = useState([]);
  console.log("raju", products);
  const [loginUser, setLoginUser] = useContext(UserContext);
  console.log("loginuser", loginUser);

  //   const datas = { ...selcProducts, ...loginUser };

  //   console.log(datas);

  /////////////////
  useEffect(() => {
    fetch("http://localhost:1000/OrderEventss?email=" + loginUser.email)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  //////////////////
  //   const url = `http://localhost:1000/addEvents`;

  //   fetch(url, {
  //     method: "post",
  //     body: JSON.stringify(datas),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   }).then((res) => console.log(res));

  ////////////////////////////////////////////////////////

  // const handelOrder = () => {
  //   const datas = { ...selcProducts, ...loginUser, date: new Date() };
  //   fetch("http://localhost:1000/addEvents", {
  //     method: "post",
  //     body: JSON.stringify(datas),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data) {
  //         alert("your order placed succesfully");
  //       }
  //     });
  // };
  ///////////////////////////////////
  return (
    <div>
      <h1>ManageProducts</h1>

      {products.map((pd) => (
        <OrderManageProducts pd={pd}></OrderManageProducts>
      ))}
    </div>
  );
};

export default ManageProducts;
