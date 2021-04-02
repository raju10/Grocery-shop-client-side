import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, ListGroup, Media, Table } from "react-bootstrap";

const AdmainAllPrdEdtngAndManage = (props) => {
  const { name, price, imgUrl } = props.pd;
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
  return (
    <div>
      <Container>
        <Table>
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
                <button
                  onClick={() => hendelPrdDeleted(props.pd._id)}
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faTrashAlt} /> Deleted
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AdmainAllPrdEdtngAndManage;
