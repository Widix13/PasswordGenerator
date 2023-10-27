import { SetStateAction, useState } from "react";
import "./Generator.css";
import PasswordDisplay from "./PasswordDisplay";
import PasswordSettings from "./PasswordSettings";
import PasswordStrength from "./PasswordStrength";
import GenerateButton from "./GenerateButton";

function PasswordGenerator() {
  const minValue = 4;
  const [password, setPassword] = useState("");
  const [characterLength, setCharacterLength] = useState<number>(minValue);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [lowercase, setLowercase] = useState<boolean>(true);
  const [number, setNumber] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";
    if (symbols) charset += "!@#$%^&*()";
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
      <PasswordDisplay
        password={password}
        copyToClipboard={copyToClipboard}
      ></PasswordDisplay>
      <PasswordSettings
        characterLength={characterLength}
        setCharacterLength={(value: SetStateAction<number>) =>
          setCharacterLength(value)
        }
        uppercase={uppercase}
        setUppercase={(value: SetStateAction<boolean>) => setUppercase(value)}
        lowercase={lowercase}
        setLowercase={(value: SetStateAction<boolean>) => setLowercase(value)}
        number={number}
        setNumber={(value: SetStateAction<boolean>) => setNumber(value)}
        symbols={symbols}
        setSymbols={(value: SetStateAction<boolean>) => setSymbols(value)}
      ></PasswordSettings>
      <PasswordStrength />
      <GenerateButton generatePassword={generatePassword} />
    </div>
  );
}

export default PasswordGenerator;
