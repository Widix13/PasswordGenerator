import React from "react";

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
  );
};

export default PasswordDisplay;
