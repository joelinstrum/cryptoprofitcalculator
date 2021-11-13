import React, {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
} from "react";
import { formatNumber, toInt } from "../../../lib/helpers";
import Tooltip from "../tooltip";
import CardsContext from "../../../lib/card-context";
import { usePrice, useRadioHandler } from "./hooks";

interface PurchasePriceProps {
  cardData: ICard;
  showTooltip?: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const PurchasePrice: React.FC<PurchasePriceProps> = ({
  cardData,
  showTooltip,
  setShowModal,
}) => {
  const { price, setPrice } = usePrice(
    cardData.cryptoTicker,
    cardData.cryptoPrice,
    cardData.purchaseSource
  );
  let defaultRadio = cardData.purchaseSource || "";
  let defaultCustom =
    cardData.purchaseSource === "custom" ? cardData.purchasePrice : "";
  const [radioOption, setRadioOption] = useState(defaultRadio);
  const { updateCardHandler } = React.useContext(CardsContext);
  const [customPrice, setCustomPrice] = useState<any>(defaultCustom);
  const [enabled, setEnabled] = useState(Boolean(cardData.cryptoTicker));
  const [textClass, setTextClass] = useState(
    `${enabled ? "" : "text__disabled"}`
  );
  let timerRef: any = useRef(null);

  useRadioHandler(
    radioOption,
    price,
    setPrice,
    customPrice,
    cardData.cryptoPrice,
    cardData.id
  );

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioOption(e.target.value);
  };

  const customHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "$") {
      let _purchasePrice = formatNumber(e.target.value, 6);
      if (_purchasePrice && _purchasePrice !== "0") {
        setCustomPrice("$" + _purchasePrice);
      } else {
        setCustomPrice("");
      }
    } else {
      setCustomPrice("");
    }
    clearTimeout(timerRef.current);
    updateTable(e.target.value);
  };

  const updateTable = (val: string) => {
    timerRef.current = setTimeout(() => {
      setPrice(toInt(val));
      updateCardHandler(cardData.id, {
        purchasePrice: val,
      });
    }, 100);
  };

  useEffect(() => {
    setEnabled(Boolean(cardData.cryptoTicker));
  }, [setEnabled, setTextClass, cardData.cryptoTicker]);

  useEffect(() => {
    setTextClass(`${enabled ? "" : "text__disabled"}`);
  }, [enabled, setTextClass]);

  const historicHandler = () => {
    setRadioOption("historic");
    setShowModal(true);
  };

  useEffect(() => {
    setPrice(cardData.purchasePrice);
  }, [cardData.purchasePrice, setPrice]);

  return (
    <form>
      <div className={`row margin__top_10 ${textClass}`}>
        <div>
          <label>Purchase price</label>
          {price ? (
            <React.Fragment>
              <span className="card__purchasePrice">
                ${formatNumber(cardData.purchasePrice, 6)}
              </span>
              <span className="text__small">(per coin)</span>
            </React.Fragment>
          ) : (
            <span className="card_PurchasePrice"></span>
          )}
        </div>
        <div>
          {showTooltip && (
            <Tooltip
              text="Set the sell-price for this cryptocurrency"
              className="tooltip__container"
              showArrow={true}
              animateArrow={true}
            />
          )}
        </div>
      </div>
      <div className={`margin__left_10 ${textClass}`}>
        <div>
          <span>
            <input
              type="radio"
              name="set-purchase"
              value="current"
              checked={radioOption === "current"}
              onChange={radioHandler}
              disabled={!enabled}
            />
          </span>
          <label
            className={enabled ? "link2" : ""}
            onClick={() => {
              if (enabled) setRadioOption("current");
            }}
          >
            Use current price
          </label>
        </div>
        <div>
          <span>
            <input
              type="radio"
              name="set-purchase"
              value="historic"
              checked={radioOption === "historic"}
              onChange={radioHandler}
              onClick={() => setShowModal(true)}
              disabled={!enabled}
            />
          </span>
          <label className={enabled ? "link2" : ""} onClick={historicHandler}>
            Use price from date
          </label>
        </div>
        <div>
          <span>
            <input
              type="radio"
              name="set-purchase"
              value="custom"
              checked={radioOption === "custom"}
              onChange={radioHandler}
              disabled={!enabled}
            />
          </span>
          <label
            className={enabled ? "link2" : ""}
            onClick={() => {
              if (enabled) setRadioOption("custom");
            }}
          >
            Use custom purchase price
          </label>
          {radioOption === "custom" && enabled && (
            <span>
              <input
                type="text"
                className="input__text_tiny_wider"
                onChange={customHandler}
                value={customPrice}
              />
            </span>
          )}
        </div>
      </div>
    </form>
  );
};

export default PurchasePrice;
