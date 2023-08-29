import Bg1 from "../assets/Background/Bg1.png";

const Background = () => {
  return (
    <div
      className="bg-component"
      style={{
        backgroundImage: `url(${Bg1})`,
        height: "100vh",
        width: "100vw",
      }}
    ></div>
  );
};

export default Background;
