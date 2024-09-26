import Loading from "./Loading";
import animation from "../animations/Animation .json";

const SuspenseLoading = () => {
  return (
    <div className="w-full h-screen z-0">
      <div className="flex items-center justify-center h-full">
        <Loading animation={animation} />
      </div>
    </div>
  );
};

export default SuspenseLoading;
