import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const StoreLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-48">
        <Outlet />
      </div>
      <div className="sticky bottom-0 right-0 left-0">
        <Footer />
      </div>
    </div>
  );
};

export default StoreLayout;
