import { useState } from "react";
import "./Generator.css";

function Generator() {
  const minValue = 4;
  const [password, setPassword] = useState("");
  const [characterLength, setCharacterLength] = useState(minValue);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";
    if (uppercase) charset += "!@#$%^&*()";
    if (lowercase) charset += "qwertyuiopasdfghjklzxcvbnm";
    if (uppercase) charset += "QWERTYUIOPASDFGHJKLZXCVBNM";
    if (number) charset += "1234567890";

    for (let i = 0; i < characterLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();

    try {
      const successful = document.execCommand("copy");
      const msg = successful
        ? "Skopiowano do schowka"
        : "Nie udało się skopiować";
      console.log(successful);
    } catch (err) {
      console.error("Błąd podczas kopiowania do schowka", err);
    }

    document.body.removeChild(el);
  };

  return (
    <div className="container">
      <h5>Password Generator</h5>
      <div className="input-group">
        {password}
        <span
          className="input-group-text"
          id="addon-wrapping"
          onClick={copyToClipboard}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-copy"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"
            />
          </svg>
        </span>
      </div>
      <div className="password-settings">
        <div className="character-length">
          <label className="length-label">
            Character Length {characterLength}
          </label>
          <br />
          <input
            className="characterLength"
            id="characterLength"
            type="range"
            min={minValue}
            max="12"
            step="1"
            onChange={(e) => setCharacterLength(Number(e.target.value))}
            value={characterLength}
          />
        </div>

        <div className="form-check">
          <input
            className="uppercase-letters-form"
            type="checkbox"
            id="uppercaseCheckbox"
            onClick={(e) => setUppercase(!uppercase)}
            checked={uppercase}
          />
          <label className="uppercase-label">Include Uppercase Letters</label>
        </div>
        <div className="form-check">
          <input
            className="lowercase-letters-form"
            type="checkbox"
            id="lowercaseCheckbox"
            onClick={(e) => setLowercase(!lowercase)}
            checked={lowercase}
          />
          <label className="lowercase-label">Include Lowercase Letters</label>
        </div>
        <div className="form-check">
          <input
            className="numbers-form"
            type="checkbox"
            id="numbersCheckbox"
            onClick={(e) => setNumber(!number)}
            checked={number}
          />
          <label className="numbers-label">Include Numbers</label>
        </div>
        <div className="form-check">
          <input
            className="symbols-form"
            type="checkbox"
            id="symbolsCheckbox"
            onClick={(e) => setSymbols(!symbols)}
            checked={symbols}
          />
          <label className="symbol-label">Include Symbols</label>
        </div>

        <div className="strenght">STRENGHT .......................</div>
        <button onClick={generatePassword}>Generate</button>
      </div>
    </div>
  );
}

export default Generator;
