import React, { useState, useEffect } from "react";
import Hero from "../assets/Character/hero/Walk With Sword/1.png";
import Hero2 from "../assets/Character/hero/Walk With Sword/3.png";
import SwordAttack0 from "../assets/Character/hero/Attack With Sword/0.png";
import SwordAttack1 from "../assets/Character/hero/Attack With Sword/1.png";
import SwordAttack2 from "../assets/Character/hero/Attack With Sword/2.png";
import SwordAttack3 from "../assets/Character/hero/Attack With Sword/3.png";
import SwordAttack4 from "../assets/Character/hero/Attack With Sword/4.png";
import WalkingWithSword1 from "../assets/Character/hero/Walk With Sword/1.png";
import WalkingWithSword2 from "../assets/Character/hero/Walk With Sword/2.png";
import WalkingWithSword3 from "../assets/Character/hero/Walk With Sword/3.png";
import WalkingWithSword4 from "../assets/Character/hero/Walk With Sword/4.png";
import WalkingWithSword5 from "../assets/Character/hero/Walk With Sword/5.png";
import WalkingWithSword6 from "../assets/Character/hero/Walk With Sword/6.png";
import "../components/style files/Charakter.scss";

const Character = () => {
  const [position, setPosition] = useState({ left: 10 });
  const [currentImage, setCurrentImage] = useState(Hero);
  const [isFlipped, setIsFlipped] = useState(false); // Zustand für das Spiegeln
  const swordAttack = [
    SwordAttack0,
    SwordAttack1,
    SwordAttack2,
    SwordAttack3,
    SwordAttack4,
  ];

  const walkingWithSword = [
    WalkingWithSword1,
    WalkingWithSword2,
    WalkingWithSword3,
    WalkingWithSword4,
    WalkingWithSword5,
    WalkingWithSword6,
  ];

  const frameWalkingWithSword = (e) => {
    if (e.key === "ArrowLeft" || "ArrowRight") {
      let index = 0;
      // Intervall für die Laufanimation nach links
      const leftInterval = setInterval(() => {
        setCurrentImage(walkingWithSword[index]);
        index++;
        if (index === walkingWithSword.length) {
          clearInterval(leftInterval);
          setCurrentImage(Hero);
        }
      }, 200);
    }
  };
  const handleArrowKey = (e) => {
    if (e.key === "ArrowLeft") {
      setIsFlipped(false); // Bild wird zurückgesetzt
      frameWalkingWithSword(e);
      setPosition((prevState) => ({
        ...prevState,
        left: prevState.left - 10,
      }));
    } else if (e.key === "ArrowRight") {
      setIsFlipped(true); // Bild wird gespiegelt
      frameWalkingWithSword(e);
      setCurrentImage(Hero2);
      setPosition((prevState) => ({
        ...prevState,
        left: prevState.left + 10,
      }));
    }
  };
  const attackWithSword = (e) => {
    if (e.key === "a") {
      let index = 0;
      // Intervall für die Attacke
      const interval = setInterval(() => {
        setCurrentImage(swordAttack[index]);
        index++;
        if (index === swordAttack.length) {
          clearInterval(interval);
          setCurrentImage(Hero); // Setze das Bild wieder zurück
        }
      }, 200);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", attackWithSword);
    return () => {
      window.removeEventListener("keydown", attackWithSword);
    };
  });

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKey);
    return () => {
      window.removeEventListener("keydown", handleArrowKey);
    };
  });

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
