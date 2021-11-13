import React from "react";

interface HelperProps {
  text: string;
}

const Helper: React.FC<HelperProps> = ({ text }) => {
  return <div>&larr; {text}</div>;
};

export default Helper;
