import Hero from "../assets/Character/hero/Walk With Sword/1.png";
import "../components/style files/Charakter.scss";

const Character = () => {
  return (
    <div className="character-walk">
      <img src={Hero} alt="Hero"></img>
    </div>
  );
};

export default Character;
