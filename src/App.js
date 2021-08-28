import "./styles.css";
import React from "react";
import { useState } from "react";
import { data } from "./data";

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");
  const [emoji, setEmoji] = useState("");

  var emojis = Object.keys(data);

  function handleChange(e) {
    var userInput = e.target.value;
    if (userInput === "") {
      return;
    }
    getEmojiMeaning(userInput);
  }

  function getEmojiMeaning(emoji) {
    var meaning = data[emoji];
    if (!meaning) {
      meaning = "We Dont have this in out Database as of now";
    }
    setEmoji(emoji);
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <main>
        <header>
          <h1 className="title">EmojiWise</h1>
        </header>
        <input
          className="userInput"
          placeholder="Enter Emoji to know its meaning"
          onChange={handleChange}
        />
        <div className="emojiMeaning">
          {emoji} {emojiMeaning}
        </div>
        <h2>Emojis We Know</h2>
        <div className="emojiContainer">
          {emojis.map((item) => (
            <span key={item} className="emoji" onClick={() => getEmojiMeaning(item)}>
              {item}
            </span>
          ))}
        </div>
      </main>
      <footer>
        Made with React on CodeSandBox by{" "}
        <a className="footer-link" href="https://ravikumar0403.netlify.app">
          Ravi Kumar Singh
        </a>
      </footer>
    </div>
  );
}
