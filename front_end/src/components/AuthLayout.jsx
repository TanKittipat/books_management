import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <div className="fixed bottom-0 w-screen">
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
