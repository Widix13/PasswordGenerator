import React from "react";
interface Props {
  generatePassword: () => void;
}
const GenerateButton = ({ generatePassword }: Props) => {
  return (
    <div className="button-generate">
      <button onClick={generatePassword}>Generate</button>
    </div>
  );
};

export default GenerateButton;
