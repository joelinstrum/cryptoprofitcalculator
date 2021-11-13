import React, { useState, useEffect } from "react";
import DeleteCard from "./DeleteCard";
import Modal from "../modal";
import CryptoList from "../crypto-list";
import CardsContext from "../../../lib/card-context";
import SelectCrypto from "./SelectCrypto";
import PurchasePrice from "./PurchasePrice";
import SellPrice from "./SellPrice";
import Investment from "./Investment";
import Results from "./Results";
import HistoricPrice from "./HistoricPrice";
import { isTruthy } from "../../../lib/helpers";

// const stepsToComplete = ["set-crypto", "set-purchase-price"];

interface CardProps {
  cardData: ICard;
  num: number;
}

const Card: React.FC<CardProps> = ({ cardData, num }) => {
  const [showModal, setShowModal] = useState(false);
  const [showPriceHistoricModal, setShowPriceHistoricModal] = useState(false);
  const [showSellHistoricModal, setSellPriceHistoricModal] = useState(false);
  const { updateCardHandler } = React.useContext(CardsContext);
  const [incompletedStep, setIncompletedStep] = useState("");

  const closeModalHandler = () => {
    setShowModal(false);
    setShowPriceHistoricModal(false);
    setSellPriceHistoricModal(false);
  };

  const cryptoClickHandler = (
    ticker: string,
    fullName: string | null,
    cryptoPrice: string | null | number
  ) => {
    updateCardHandler(cardData.id, {
      cryptoName: fullName,
      cryptoTicker: ticker,
      cryptoPrice,
    });
    setShowModal(false);
  };

  const historicPriceClickHandler = (historicPrice: string) => {
    setShowPriceHistoricModal(false);
    updateCardHandler(cardData.id, {
      purchasePrice: historicPrice,
      purchaseSource: "historic",
    });
  };

  const historicSellClickHandler = (historicPrice: string) => {
    setSellPriceHistoricModal(false);
    updateCardHandler(cardData.id, {
      sellPrice: historicPrice,
      sellSource: "historic",
    });
  };

  useEffect(() => {
    let step = "set-crypto";
    if (cardData.cryptoTicker) {
      step = "set-purchase-price";
    }
    if (isTruthy(cardData.purchasePrice)) {
      step = "set-sell-price";
    }
    if (isTruthy(cardData.sellPrice)) {
      step = "set-investment";
    }
    setIncompletedStep(step);
  }, [cardData.cryptoTicker, cardData.purchasePrice, cardData.sellPrice]);

  return (
    <div className="card__row">
      {showModal && (
        <Modal
          title={`Set crytpo`}
          className="crypto__list_modal"
          closeOnOutsideClick={true}
          onClose={closeModalHandler}
        >
          <CryptoList clickHandler={cryptoClickHandler} />
        </Modal>
      )}
      {showPriceHistoricModal && (
        <Modal
          title={`Base price of ${cardData.cryptoName} from a specific date`}
          className="historic__modal_popup"
          closeOnOutsideClick={true}
          onClose={closeModalHandler}
        >
          <HistoricPrice
            cryptoTicker={cardData.cryptoTicker}
            cryptoName={cardData.cryptoName}
            cryptoPrice={cardData.cryptoPrice}
            clickHandler={historicPriceClickHandler}
          />
        </Modal>
      )}
      {showSellHistoricModal && (
        <Modal
          title={`Base sell price of ${cardData.cryptoName} from a specific date`}
          className="historic__modal_popup"
          closeOnOutsideClick={true}
          onClose={closeModalHandler}
        >
          <HistoricPrice
            cryptoTicker={cardData.cryptoTicker}
            cryptoName={cardData.cryptoName}
            cryptoPrice={cardData.cryptoPrice}
            clickHandler={historicSellClickHandler}
          />
        </Modal>
      )}
      <div className="card__container">
        <DeleteCard cardId={cardData.id} enabled={num > 0} />
        <SelectCrypto
          cardData={cardData}
          setShowModal={setShowModal}
          showTooltip={incompletedStep === "set-crypto"}
        />
        <PurchasePrice
          cardData={cardData}
          showTooltip={incompletedStep === "set-purchase-price"}
          setShowModal={setShowPriceHistoricModal}
        />
        <SellPrice
          cardData={cardData}
          showTooltip={incompletedStep === "set-sell-price"}
          setShowModal={setSellPriceHistoricModal}
        />
        <Investment
          cardData={cardData}
          showTooltip={incompletedStep === "set-investment"}
        />
      </div>
      <div className="card__results">
        <Results cardData={cardData} />
      </div>
    </div>
  );
};

export default Card;
