import "./styles.css";

import React, { useState } from "react";

var emojiDictionary = {
  "🤩": "Star-Struck",
  "🤪": "Zany-face",
  "🤗": "hugging Face",
  "😷": "Corona Mask",
  "🥴": "Woozy Face",
  "💩": "Pile of Poo"
};
var emojis = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This is not in our dataBase";
    }
    setMeaning(meaning);
  }
  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji meter </h1>

      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emoji's in Our DataBase</h3>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
