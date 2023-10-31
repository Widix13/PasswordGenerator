import React from "react";
import Copy from "../assets/copy.svg";

interface Prop {
  password: string;
  copyToClipboard: () => void;
}

const PasswordDisplay = ({ password, copyToClipboard }: Prop) => {
  const checkPasswordIsNull = () => {
    if (password === "") return "Item not found";
    return password;
  };

  return (
    <div className="input-group">
      <span
        className="display-password"
        id="addon-wrapping"
        onClick={copyToClipboard}
      >
        <span>{checkPasswordIsNull()}</span>
        <img src={Copy} alt="copy" />
      </span>
    </div>
  );
};

export default PasswordDisplay;
