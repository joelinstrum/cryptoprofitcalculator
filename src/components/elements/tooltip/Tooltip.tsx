import React from "react";

interface TooltipProps {
  text: string;
  animateArrow?: boolean;
  showArrow?: boolean;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  animateArrow,
  showArrow,
  className,
}) => {
  const _className = `${className} tooltip`;
  let _arrowClassname = showArrow
    ? "tooltip__arrow_show"
    : "tooltip__arrow_hide";
  _arrowClassname += animateArrow ? " tooltip__arrow_animate" : "";
  return (
    <div className={_className}>
      <span className={_arrowClassname}>&#8592;</span>
      <span>{text}</span>
    </div>
  );
};

export default Tooltip;
