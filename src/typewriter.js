import React, { useEffect, useState } from "react";
import styles from "./App.css";

const Typewriter = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [typingDelay, setTypingDelay] = useState(70);
  const [erasingDelay, setErasingDelay] = useState(50);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const textLength = text.length;

    let timerId;

    if (!isErasing) {
      timerId = setTimeout(() => {
        setCurrentText((prevText) => prevText + text.charAt(prevText.length));
        if (currentText.length === textLength) {
          setIsErasing(true);
          clearTimeout(timerId);
        }
      }, typingDelay);
    } else {
      timerId = setTimeout(() => {
        setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
        if (currentText === "") {
          setIsErasing(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          clearTimeout(timerId);
        }
      }, erasingDelay);
    }

    return () => clearTimeout(timerId);
  }, [
    currentText,
    currentTextIndex,
    isErasing,
    texts,
    typingDelay,
    erasingDelay,
  ]);

  return (
    <h1 className="typewriter">
      I love {currentText}
      <span className="cursor" />
    </h1>
  );
};

export default Typewriter;
