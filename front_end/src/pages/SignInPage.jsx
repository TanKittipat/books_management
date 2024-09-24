import React, { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthServices from "../services/auth.service";

const SignInPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login, user: loggedInUser } = useAuthContext();
  useEffect(() => {
    if (loggedInUser) {
      navigate("/store");
    }
  }, [loggedInUser]);

  useEffect(() => {
    setUser({ username: "", password: "" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const currentUser = await AuthServices.login(
        user.username,
        user.password
      );
      if (currentUser.status === 200) {
        login(currentUser.data);
        setUser({ username: "", password: "" });
        navigate("/store");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="my-48">
      {" "}
      <h1 className="text-4xl font-bold text-center mb-7">Sign in</h1>
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
              onChange={handleChange}
              name="username"
              value={user.username}
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
              onChange={handleChange}
              name="password"
              value={user.password}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              onClick={handleLogIn}
              className="btn btn-success"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
