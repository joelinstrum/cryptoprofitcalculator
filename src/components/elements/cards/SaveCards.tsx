import React, { useState, useEffect } from "react";

interface SaveCardsProps {
  saveCardsHandler: () => void;
  active: boolean;
  resetShouldUpdate: () => void;
}

const SaveCards: React.FC<SaveCardsProps> = ({
  saveCardsHandler,
  active,
  resetShouldUpdate,
}) => {
  const [isSaving, setIsSaving] = useState(false);
  const [className, setClassName] = useState("saveCards saveCards__inactive");
  const [text, setText] = useState("Save Cards");

  const clickHandler = () => {
    saveCardsHandler();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      resetShouldUpdate();
    }, 1000);
  };

  useEffect(() => {
    if (isSaving) {
      setText("Saving cards...");
      setClassName("saveCards saveCards__saving");
    } else {
      setText("Save Cards");
      setClassName("saveCards saveCards__inactive");
    }
  }, [isSaving]);

  useEffect(() => {
    if (active) {
      setClassName("saveCards saveCards__active fuckkkk");
    }
  }, [active]);

  return (
    <div>
      <div className={className} onClick={clickHandler}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default SaveCards;
