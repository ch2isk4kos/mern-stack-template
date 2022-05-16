import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { username, email, password, confirm } = formData;

  const handleOnChange = (e) => {
    // setFormData({ [e.target.name]: e.target.value });
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="Register">
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account.</p>
      </section>
      <section className="form">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder="Enter A Username"
              value={username}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter An Email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter A Password"
              value={password}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <input
              id="confirm"
              name="confirm"
              type="password"
              className="form-control"
              placeholder="Confirm Your Password"
              value={confirm}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
