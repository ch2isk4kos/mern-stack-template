import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { username, email, password, confirm } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // listen for changes
  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/");
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) toast.error("Passwords do not match");
    else {
      const user = {
        username,
        email,
        password,
      };
      dispatch(register(user));
    }
  };

  if (isLoading) return <Spinner />;

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
