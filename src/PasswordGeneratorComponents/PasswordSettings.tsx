import React, { ReactNode } from "react";

interface Props {
  characterLength: number;
  setCharacterLength: (characterLength: number) => void;
  uppercase: boolean;
  setUppercase: (uppercase: boolean) => void;
  lowercase: boolean;
  setLowercase: (lowercase: boolean) => void;
  number: boolean;
  setNumber: (number: boolean) => void;
  symbols: boolean;
  setSymbols: (symbols: boolean) => void;
}
const slider = document.querySelector("#characterLength") as HTMLInputElement;

const changeColorSlider = () => {
  const minValue = parseInt(slider.min, 10);
  const maxValue = parseInt(slider.max, 10);
  const sliderValue =
    ((parseInt(slider.value, 10) - minValue) / (maxValue - minValue)) * 100;
  slider.style.background = `linear-gradient(to right, #a5ffaf ${sliderValue.toString()}%, #ccc ${sliderValue.toString()}%)`;
};

const PasswordSettings = ({
  characterLength,
  setCharacterLength,
  lowercase,
  setLowercase,
  uppercase,
  setUppercase,
  number,
  setNumber,
  symbols,
  setSymbols,
}: Props) => {
  return (
    <div className="password-settings">
      <div className="character-length">
        <div className="length-label">
          <span className="character-label">Character Length </span>
          <span className="character">{characterLength}</span>
        </div>
        <input
          className="characterLength"
          id="characterLength"
          type="range"
          min="4"
          max="12"
          step="1"
          onInput={changeColorSlider}
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
          onClick={(e) => {
            setSymbols(!symbols);
            console.log(symbols);
          }}
          checked={symbols}
        />
        <label className="symbol-label">Include Symbols</label>
      </div>
    </div>
  );
};

export default PasswordSettings;
