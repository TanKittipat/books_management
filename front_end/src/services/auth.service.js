import api from "./api";
import TokenService from "./token.service";

const authURL = import.meta.env.VITE_AUTH_URL;

const register = async (username, email, password) => {
  return await api.post(authURL + "/signup", { username, email, password });
};

const login = async (username, password) => {
  const response = await api.post(authURL + "/signin", { username, password });
  if (response.data.accessToken) {
    localStorage.setItem(
      "accessToken",
      JSON.stringify(response.data.accessToken)
    );
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response;
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};

const AuthServices = {
  register,
  login,
  logout,
};

export default AuthServices;
