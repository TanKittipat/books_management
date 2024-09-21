import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import AuthServices from "../services/auth.service";

const SignUpPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { user: loggedInUser } = useAuthContext();
  useEffect(() => {
    if (loggedInUser) {
      navigate("/store");
    }
  }, [loggedInUser]);

  useEffect(() => {
    setUser({ username: "", email: "", password: "" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const register = await AuthServices.register(
        user.username,
        user.email,
        user.password
      );
      if (register.status === 200) {
        setUser({ username: "", email: "", password: "" });
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <div className="my-36">
      {" "}
      <h1 className="text-4xl font-bold text-center mb-7">Sign up</h1>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
              name="username"
              onChange={handleChange}
              value={user.username}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              onChange={handleChange}
              value={user.email}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              onChange={handleChange}
              value={user.password}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              onClick={handleRegister}
              className="btn btn-success"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
