import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Admin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imgUrl, setImgUrl] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      imgUrl: imgUrl,
    };
    const url = `http://localhost:1000/addEvent`;
    console.log(eventData);
    fetch(url, {
      method: "post",
      body: JSON.stringify(eventData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json)
      .then((data) => {
        console.log("data", data);
      });
  };
  /////////////////////

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "8ac80650e2f66ae1b582e04d7ad23844");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Link to="/admain-manages-product">
        <button className="btn btn-success">
          Edit Your adding all products
        </button>
      </Link>
      <h2>add your awesome products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="price"
          ref={register({ required: true })}
          placeholder="product price"
        />

        {errors.price && <span className="error"> price is required</span>}
        <br />
        <input name="name" defaultValue="new event" ref={register} />
        <br />
        <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Admin;
