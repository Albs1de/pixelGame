import React, { useState, useEffect } from "react";
import Hero from "../assets/Character/hero/Walk With Sword/1.png";
import Hero2 from "../assets/Character/hero/Walk With Sword/3.png";
import "../components/style files/Charakter.scss";
const Character = () => {
  const [position, setPosition] = useState({ left: 10 });
  const [currentImage, setCurrentImage] = useState(Hero);
  const [isFlipped, setIsFlipped] = useState(false); // Zustand für das Spiegeln

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setIsFlipped(false); // Bild wird gespiegelt
      setPosition((prevState) => ({
        ...prevState,
        left: prevState.left - 10,
      }));
    } else if (e.key === "ArrowRight") {
      setIsFlipped(true); // Bild wird zurückgesetzt
      setCurrentImage(Hero2);
      setPosition((prevState) => ({
        ...prevState,
        left: prevState.left + 10,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="character-walk" style={{ left: `${position.left}px` }}>
      <img
        src={currentImage}
        alt="Hero"
        style={{ transform: isFlipped ? "scaleX(-1)" : "scaleX(1)" }}
      />
    </div>
  );
};

export default Character;
