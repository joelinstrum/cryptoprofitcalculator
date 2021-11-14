import React, {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
} from "react";
import { formatNumber, toInt, isTruthy } from "../../../lib/helpers";
import Tooltip from "../tooltip";
import CardsContext from "../../../lib/card-context";
import { useSellRadioHandler } from "./hooks";

interface SellPriceProps {
  cardData: ICard;
  showTooltip?: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const SellPrice: React.FC<SellPriceProps> = ({
  cardData,
  showTooltip,
  setShowModal,
}) => {
  const [price, setPrice] = useState<string | number | null>(
    cardData.sellPrice
  );
  let defaultRadio = cardData.sellSource || "";
  let defaultCustom =
    cardData.sellSource === "custom" ? cardData.sellPrice : "";
  const [radioOption, setRadioOption] = useState(defaultRadio);
  const { updateCardHandler } = React.useContext(CardsContext);
  const [customSell, setCustomSell] = useState<any>(defaultCustom);
  const [enabled, setEnabled] = useState<boolean>(
    isTruthy(cardData.purchasePrice)
  );
  const [textClass, setTextClass] = useState(
    `${enabled ? "" : "text__disabled"}`
  );
  let timerRef: any = useRef(null);

  useSellRadioHandler(
    radioOption,
    price,
    setPrice,
    customSell,
    cardData.cryptoPrice,
    cardData.id
  );

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioOption(e.target.value);
  };

  const customHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "$") {
      let _sellPrice = formatNumber(e.target.value, 6);
      if (_sellPrice && _sellPrice !== "0") {
        setCustomSell("$" + _sellPrice);
      } else {
        setCustomSell("");
      }
    } else {
      setCustomSell("");
    }
    clearTimeout(timerRef.current);
    updateTable(e.target.value);
  };

  const updateTable = (val: string) => {
    timerRef.current = setTimeout(() => {
      setPrice(toInt(val));
      updateCardHandler(cardData.id, {
        sellPrice: val,
      });
    }, 100);
  };

  useEffect(() => {
    setEnabled(isTruthy(cardData.purchasePrice));
  }, [setEnabled, setTextClass, cardData.purchasePrice]);

  useEffect(() => {
    setTextClass(`${enabled ? "" : "text__disabled"}`);
  }, [enabled, setTextClass]);

  const historicHandler = () => {
    setRadioOption("historic");
    setShowModal(true);
  };

  useEffect(() => {
    setPrice(cardData.sellPrice);
  }, [cardData.sellPrice, setPrice]);

  return (
    <form>
      <div className={`row margin__top_10 ${textClass}`}>
        <div>
          <label>Sell price</label>
          {price ? (
            <React.Fragment>
              <span className="card__sellPrice">
                ${formatNumber(cardData.sellPrice, 6)}
              </span>
              <span className="text__small">
                (per coin{" "}
                {radioOption === "historic" && cardData.sellDate
                  ? ` on ${cardData.sellDate}`
                  : ""}
                )
              </span>
            </React.Fragment>
          ) : (
            <span className="card_SellPrice"></span>
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
              name="set-sell"
              value="current"
              checked={radioOption === "current"}
              onChange={radioHandler}
              disabled={!enabled}
            />
          </span>
          <label
            className={enabled ? "link2" : ""}
            onClick={() => setRadioOption("current")}
          >
            Use current price point for selling
          </label>
        </div>
        <div>
          <span>
            <input
              type="radio"
              name="set-sell"
              value="historic"
              checked={radioOption === "historic"}
              onChange={radioHandler}
              onClick={() => setShowModal(true)}
              disabled={!enabled}
            />
          </span>
          <label className={enabled ? "link2" : ""} onClick={historicHandler}>
            Use price point to sell from date
          </label>
        </div>
        <div>
          <span>
            <input
              type="radio"
              name="set-sell"
              value="custom"
              checked={radioOption === "custom"}
              onChange={radioHandler}
              disabled={!enabled}
            />
          </span>
          <label
            className={enabled ? "link2" : ""}
            onClick={() => setRadioOption("custom")}
          >
            Use custom sell price
          </label>
          {radioOption === "custom" && enabled && (
            <span>
              <input
                type="text"
                className="input__text_tiny_wider"
                onChange={customHandler}
                value={customSell}
                disabled={!enabled}
              />
            </span>
          )}
        </div>
      </div>
    </form>
  );
};

export default SellPrice;
