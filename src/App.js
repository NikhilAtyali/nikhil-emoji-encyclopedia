import './App.css';
import React, { useState } from "react";


const Encylopedia = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "👨‍💻": "A boy coding",
  "⚽": "Football",
  "🚧": "Construction barrier",
  "🍓": "Strawberry",
  "🛸": "UFO",
  "🏓": "Table tennis",
  "🌍": "Earth",
  "🤳": "Taking selfie",
  "💋": "Kiss mark",
  "🌭": "Hotdog",
  "🛹": "Skateboard",
  "🚂": "Locomotive",
  "😎": "Face with sunglasses",
  "🎁": "Wrapped gift",
  "🎢": "Roller Coaster",
  "🦘": "Kangaroo",
  "🧠": "Brain",
  "🏇": "Horse racing"
};

/*
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setmeaning] = useState("Translation will appear here");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setmeaning(emojiDictionary[inputEmoji]);
    } else {
      setmeaning(
        "failed to recognise this emoji, please try from the list given below"
      );
    }
  }

  function emojiClickHandler(inputEmoji) {
    setmeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1 class="heading">Emoji Encyclopedia</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Enter your emoji"}
        
      />
      <h2> {emoji}</h2>
      <h2> {meaning}</h2>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          
          {emoji}
        </span>
      ))}
    </div>
  );
}



