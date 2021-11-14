import React, { useState, useEffect, useRef } from "react";
import { formatNumber, toInt, isTruthy } from "../../../lib/helpers";
import Tooltip from "../tooltip";
import CardsContext from "../../../lib/card-context";

interface InvestmentProps {
  cardData: ICard;
  showTooltip?: boolean;
}

const Investment: React.FC<InvestmentProps> = ({ cardData, showTooltip }) => {
  const [investment, setInvestment] = useState<string | number | null>(
    cardData.investment
  );
  const [investmentType, setInvestmentType] = useState(cardData.investmentType);
  const [lastSavedInput, setLastSavedInput] = useState(cardData.investment);
  const [coins, setCoins] = useState(cardData.coins);
  const { updateCardHandler } = React.useContext(CardsContext);
  let timerRef: any = useRef(null);
  const [enabled, setEnabled] = useState(
    Boolean(cardData.cryptoTicker) &&
      isTruthy(cardData.purchasePrice && isTruthy(cardData.sellPrice))
  );
  const [textClass, setTextClass] = useState(
    `${enabled ? "" : "text__disabled"}`
  );

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestmentType(e.target.value);
  };

  const labelClick = (t: string) => {
    setInvestmentType(t);
  };

  const coinsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = formatNumber(e.target.value, 4);
    let _investment =
      parseFloat(e.target.value) * toInt(cardData.purchasePrice);
    if (val !== "0") {
      setCoins(val.toString());
      setInvestment(_investment);
    } else {
      setCoins("");
    }
    clearTimeout(timerRef.current);
    updateTable(val);
  };

  const investmentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let _coins = toInt(
      toInt(e.target.value) / toInt(cardData.purchasePrice),
      4
    );
    setCoins(_coins);
    const val = formatNumber(e.target.value, 2);
    if (val === "0") {
      setInvestment("");
    } else {
      setInvestment(val);
    }
  };

  const updateTable = (val: string) => {
    timerRef.current = setTimeout(() => {
      setLastSavedInput(val);
    }, 1000);
  };

  const saveInput = () => {
    if (lastSavedInput !== investment) {
      setLastSavedInput(investment);
    }
  };

  useEffect(() => {
    let _investment;
    _investment = toInt(cardData.purchasePrice) * toInt(coins, 2);
    updateCardHandler(cardData.id, {
      investment: _investment,
      investmentType: investmentType,
      coins,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardData.id,
    cardData.purchasePrice,
    investment,
    investmentType,
    lastSavedInput,
    coins,
  ]);

  useEffect(() => {
    setEnabled(
      Boolean(cardData.cryptoTicker) &&
        isTruthy(cardData.purchasePrice) &&
        isTruthy(cardData.sellPrice)
    );
  }, [
    setEnabled,
    cardData.cryptoTicker,
    cardData.purchasePrice,
    cardData.sellPrice,
  ]);

  useEffect(() => {
    setTextClass(`${enabled ? "" : "text__disabled"}`);
  }, [enabled, setTextClass]);

  return (
    <React.Fragment>
      <div className={`row margin__top_10 ${textClass}`}>
        <div>
          <label>Investment</label>
        </div>
        <div>
          {showTooltip && !isTruthy(investment) && (
            <Tooltip
              text="Set the $ invested or number of coins purchased"
              className="tooltip__container"
              showArrow={true}
              animateArrow={true}
            />
          )}
        </div>
      </div>
      <div className={`margin__left_10 ${textClass}`}>
        <div>
          <input
            type="radio"
            name="investment-type"
            value="coins"
            checked={investmentType === "coins"}
            disabled={!enabled}
            onChange={radioHandler}
          />
          {enabled ? (
            <label onClick={() => labelClick("coins")} className="link2">
              Number of coins purchased
            </label>
          ) : (
            <label className="text__disabled">Number of coins purchased</label>
          )}

          {investmentType === "coins" && (
            <input
              type="text"
              className="input__text_tiny"
              onChange={coinsHandler}
              value={coins || ""}
              onBlur={saveInput}
            />
          )}
        </div>
        <div>
          <input
            type="radio"
            name="investment-type"
            value="dollars"
            checked={investmentType === "dollars"}
            disabled={!enabled}
            onChange={radioHandler}
          />
          {enabled ? (
            <label onClick={() => labelClick("dollars")} className="link2">
              Total $ amount invested
            </label>
          ) : (
            <label className="text__disabled">Total $ amount invested</label>
          )}

          {investmentType === "dollars" && (
            <input
              type="text"
              className="input__text_tiny"
              onChange={investmentHandler}
              value={formatNumber(investment, 2) || ""}
              onBlur={saveInput}
              disabled={!enabled}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Investment;
