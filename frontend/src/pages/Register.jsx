import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const Register = () => {
  //   const [Name, setName] = useState("");
  //   const [Email, setEmail] = useState("");
  //   const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const { setUser } = useAuth();
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const API = "http://localhost:4000/v1/user/register";
  const handelSubmit = async (e) => {
    e.preventDefault();

    // axios.post(API, {email,password})
    // .then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });
    // shakil1122@test.com
    try {
      const response = await axios.post(API, userInfo);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      setUser(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          onChange={handelChange}
          value={userInfo.name}
        />
        <br />
        <input
          type="text"
          placeholder="Your Email"
          name="email"
          onChange={handelChange}
          value={userInfo.email}
        />
        <br />
        <input
          type="password"
          placeholder="****"
          name="password"
          value={userInfo.password}
          onChange={handelChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
      <Link to="/">go Back</Link>
    </div>
  );
};

export default Register;
