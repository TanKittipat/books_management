import React from "react";
import SwiperComponent from "../components/SwiperComponent";

const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 bg-opacity-50 min-h-screen absolute z-10">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-gray-500 font-bold">SE</span>
              -Books
            </h1>
            <p className="py-6">
              Dive into a world of imagination and discovery! At{" "}
              <span className="text-gray-500">SE</span>-Books, we believe that
              every book holds the power to transport you to new realms, inspire
              creativity, and spark meaningful conversations. Our carefully
              curated selection features everything from timeless classics to
              the latest bestsellers, across all genres.
            </p>
            <a href="/store" className="btn btn-primary">
              Go to store
            </a>
          </div>
        </div>
      </div>
      <SwiperComponent />
    </div>
  );
};

export default Home;
