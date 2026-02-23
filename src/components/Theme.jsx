import React, { use, useState } from "react";
import img1 from "../assets/images/cardsImage/img4.png";
import img2 from "../assets/images/cardsImage/img5.png";
import img3 from "../assets/images/cardsImage/img6.png";
import img4 from "../assets/images/cardsImage/img7.png";

export default function SplitScreen() {
  const [data, setData] = useState(true);
  const [theme, setTheme] = useState(0);

  const themes = [
    { 
        leftBg: "#1e3a8a", 
        rightBg: "#9333ea", 
        text: "white"
    },
    { 
        leftBg: "#facc15", 
        rightBg: "#fb923c", 
        text: "black" 
    },
  
  ];

  return (
    <div className="mainWrapper">
      <div className="tvFrame">
        <div
          className="leftSide"
          style={{
            background: themes[theme].leftBg,
            color: themes[theme].text,
            "--cColor": themes[theme].rightBg,
          }}
        >
          <img src={data ? img1 : img3} alt="" />
          <h2>{data ? "JavaScript" : "React"}</h2>
          <p>
            {data
              ? "This is javascript course provided by mr. shavan singh . and this is complete javascript course with deep concepts."
              : "This is react course provided by mr. shavan singh . and this is complete react course with deep concepts."}
          </p>
        </div>

        <div
          className="rightSide"
          style={{
            background: themes[theme].rightBg,
            color: themes[theme].text,
          }}
        >
          <img src={data ? img2 : img4} alt="" />
          <h2>{data ? "Python" : "C Language"}</h2>
          <p>
            {data
              ? "This is python course provided by mr. shavan singh . and this is complete python course with deep concepts."
              : "This is c language course provided by mr. shavan singh . and this is complete c language course with deep concepts."}
          </p>
        </div>
      </div>

      <button
        className="themeBtn"
        onClick={() => {
          setData(!data);
          setTheme((prev) => (prev + 1) % 2); // theme rotate ye imp hai 
        }}
      >
        Change Content
      </button>
    </div>
  );
}
