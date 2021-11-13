import React, { useRef, useState } from "react";
import Portal from "../portal";

interface ModalProps {
  title: string;
  children?: React.ReactNode;
  closeOnOutsideClick?: boolean;
  onClose: () => void;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  closeOnOutsideClick,
  onClose,
  className,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [classNames] = useState(`modal__popup ${className}`);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const htmlElement = e.target as HTMLDivElement;
    if (
      divRef.current &&
      !divRef.current.contains(htmlElement) &&
      closeOnOutsideClick
    ) {
      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <Portal>
      <div className="modal__container" onClick={onClickHandler}>
        <div className={classNames} ref={divRef}>
          <div className="modal__popup_title_bar">
            <div className="modal__popup_title">{title}</div>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
