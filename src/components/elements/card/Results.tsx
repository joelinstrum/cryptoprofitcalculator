import React, { useState, useEffect } from "react";
import { formatNumber, calculateReturn, formatNet } from "../../../lib/helpers";

interface ResultsProps {
  cardData: ICard;
}

const Results: React.FC<ResultsProps> = ({ cardData }) => {
  const [totalReturn, setTotalReturn] = useState<string | null>(null);
  const [net, setNet] = useState<number | null | string>(null);
  const [isProfit, setIsProit] = useState(false);
  const [formattedCoins, setFormattedCoins] = useState(
    formatNumber(cardData.coins)
  );
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const _return = calculateReturn(cardData.coins, cardData.sellPrice);
    setFormattedCoins(formatNumber(cardData.coins));
    if (cardData.coins && cardData.investment) {
      let _net = formatNet(cardData.investment, _return);
      if (_net) {
        setIsProit(_net >= 0);
        setNet(formatNumber(_net));
      } else if (_net === 0) {
        setIsProit(_net >= 0);
        setNet(formatNumber(_net));
      }
      setTotalReturn(_return);
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [
    cardData.coins,
    cardData.investment,
    cardData.sellPrice,
    cardData.purchasePrice,
    setTotalReturn,
  ]);

  return (
    <div className="results__container">
      {enabled && (
        <div className="table">
          <div className="table__row">
            <div />
            <div
              className="table__row_result results__header"
              id="results__header"
            >
              Results
            </div>
          </div>
          <div className="table__row">
            <div>Crypto: </div>
            <div className="table__row_right">{cardData.cryptoName}</div>
          </div>

          <div className="table__row">
            <div>Coins owned: </div>
            {formattedCoins && formattedCoins !== "0" && (
              <div className="table__row_right">
                <span className="fadeIn">
                  {formattedCoins}
                  <br />@{cardData.purchasePrice} per coin
                </span>
              </div>
            )}
          </div>

          <div className="table__row">
            <div>&nbsp;</div>
            <div />
          </div>

          <div className="table__row">
            <div>Total return: </div>
            <div className="table__row_right">
              {totalReturn && (
                <span className="fadeIn">${formatNumber(totalReturn)}</span>
              )}
            </div>
          </div>

          <div className="table__row  table__row_last">
            <div>- Amount Invested: </div>
            <div className="table__row_right">
              {cardData.investment && (
                <span className="fadeIn">
                  ${formatNumber(cardData.investment)}
                </span>
              )}
            </div>
          </div>

          <div className="table__row">
            <div>= Net return: </div>
            <div className="table__row_right">
              {net && (
                <span className={isProfit ? "net__profit" : "net__loss  "}>
                  ${net}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
