import Bg1 from "../assets/Background/Bg1.png";
import Window from "../assets/Interface/Window.png";
import "./style files/Background.scss";
const Background = () => {
  return (
    <div style={{ background: "darkgreen", height: "100vh" }}>
      <div
        className="bg-component"
        style={{
          backgroundImage: `url(${Bg1})`,
          height: "50vh",
          width: "100vw",
        }}
      >
        <div
          className="item-inventor"
          style={{
            backgroundImage: `url(${Window})`,
            height: "350px",
            width: "570px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Background;
