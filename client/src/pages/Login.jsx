import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // listen for changes
  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/dashboard");
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
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  if (isLoading) return <Spinner />;

  return (
    <div id="Login">
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        {/* <p>Please create an account.</p> */}
      </section>
      <section className="form">
        <form onSubmit={handleOnSubmit}>
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
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
