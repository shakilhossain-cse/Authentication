import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../context/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API = "http://localhost:4000/v1/user/login";
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    // axios.post(API, {email,password})
    // .then((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });
    // shakil1122@test.com
    try {
      const response = await axios.post(API, { email, password });
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
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <br />
        <input
          type="password"
          placeholder="****"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        <button type="submit">login</button>
      </form>
      <Link to="/">go Back</Link>
    </div>
  );
};

export default Login;
