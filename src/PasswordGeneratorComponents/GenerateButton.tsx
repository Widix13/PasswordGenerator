import React from "react";
interface Props {
  generatePassword: () => void;
}
const GenerateButton = ({ generatePassword }: Props) => {
  return <button onClick={generatePassword}>Generate</button>;
};

export default GenerateButton;
