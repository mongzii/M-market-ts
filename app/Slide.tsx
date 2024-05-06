"use client";

import { useState } from "react";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";

export default function Slide() {
  const images = [
    "/main1.jpg",
    "/main2.png",
    "/main3.jpg",
    "/main4.jpg",
    "/main5.jpg",
  ];
  const [index, setIndex] = useState(0);
  const moveNext = () => {
    setIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const movePrev = () => {
    setIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main-body">
      <BiCaretLeftCircle size="60" onClick={movePrev} />
      <div className="main-top">
        <div className="slide-container">
          {images.map((image, i) => (
            <div
              className="slide-box"
              key={i}
              style={{ transform: `translateX(-${index * 900}px)` }}
            >
              <img src={image} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <BiCaretRightCircle size="60" onClick={moveNext} />
    </div>
  );
}
