import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, ListGroup, Media, Table } from "react-bootstrap";

const AdmainAllPrdEdtngAndManage = (props) => {
  const { name, price, imgUrl } = props.pd;
  return (
    <div>
      <Container>
        <Table>
          {/* <thead style={{ background: "#174431f2", color: "white" }}>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th>product Name</th>
              <th>price</th>
            </tr>
          </thead> */}

          <tbody style={{ background: "#000000", color: "white" }}>
            <tr>
              <td>
                <img src={imgUrl} alt="" id="product-img" />
              </td>
              <td className="text-center">
                {" "}
                <h4>{name}</h4>
                <p>price : {price}</p>
              </td>

              <td className="float-right">
                <button className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrashAlt} /> Deleted
                </button>
              </td>
            </tr>
          </tbody>
        </Table>

        {/* <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
        {/* 
        <Media>
          <img
            width={64}
            height={64}
            className="ml-3"
            src={imgUrl}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>{name}</h5>
            <p>{price}</p>
          </Media.Body>
        </Media> */}
        {/* <div className="d-flex">
          <h5>img</h5>
          <h5>name</h5>
          <h5>price</h5>
        </div> */}
      </Container>
    </div>
  );
};

export default AdmainAllPrdEdtngAndManage;
