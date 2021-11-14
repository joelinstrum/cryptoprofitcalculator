import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import Tooltip from "../tooltip";

interface SelectCryptoProps {
  cardData: ICard;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showTooltip: boolean;
}

const SelectCrypto: React.FC<SelectCryptoProps> = ({
  cardData,
  setShowModal,
  showTooltip,
}) => {
  const [enabled, setEnabled] = useState(Boolean(cardData.cryptoTicker));
  const [textClass, setTextClass] = useState(
    `${enabled ? "text__header" : "text__disabled_header"}`
  );

  useEffect(() => {
    setEnabled(Boolean(cardData.cryptoTicker));
  }, [setEnabled, setTextClass, cardData.cryptoTicker]);

  useEffect(() => {
    setTextClass(`${enabled ? "text__header" : "text__disabled_header"}`);
  }, [enabled, setTextClass]);

  return (
    <div className="select__crypto_container">
      <div className={`row ${textClass}`}>
        <div>
          {cardData.cryptoName ? (
            <React.Fragment>
              <img
                src={`${process.env.PUBLIC_URL}/images/crypto-icons/${cardData.cryptoTicker}.png`}
                alt={cardData.cryptoName}
              />
              <span>
                {cardData.cryptoName} - {cardData.cryptoTicker}
              </span>
            </React.Fragment>
          ) : (
            <div>Crypto</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="link2" onClick={() => setShowModal(true)}>
          Select a crypto
        </div>
        <div style={{ paddingTop: "3px" }}>
          {showTooltip && (
            <Tooltip
              text="First, select a crypto"
              className="tooltip__container"
              showArrow={true}
              animateArrow={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCrypto;
