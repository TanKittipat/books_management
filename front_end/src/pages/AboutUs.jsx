import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
          <div>
            <h1 className="text-5xl font-bold">About us!</h1>
            <p className="py-6">
              Hi I'm Kittipat, the developer of this project. I'm 3rd year
              student of Nakhon Pathom Rajabhat University.
              <br />
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
