import Lottie from "lottie-react";

const Loading = ({ animation }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation.default,
  };

  const styles = {
    height: 150,
  };
  return (
    <Lottie
      animationData={animation}
      defaultOption={defaultOptions}
      style={styles}
    />
  );
};

export default Loading;
