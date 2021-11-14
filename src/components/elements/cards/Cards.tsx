import React, { useState, useMemo, useRef } from "react";
import Card from "../card";
import { initialCards } from "../../../lib/helpers";
import { defaultCard } from "../../../models/default-card";
import CardsContext from "../../../lib/card-context";
import { storage } from "../../../lib/helpers";
import SaveCards from "./SaveCards";

interface IMergeObject {
  cryptoName: string;
  cryptoPrice: string | null | number;
  cryptoTicker: string;
}

const initialTime = Date.now() / 1000;

const Cards: React.FC<{}> = () => {
  const [cards, setCards] = useState<ICard[]>(storage.get() || initialCards);
  const [previousUpdate, setPreviousUpdate] = useState<string>();
  const [cardId, setUpdateCardId] = useState("");
  const [mergeObject, setMergeObject] = useState<IMergeObject>();
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const updateCardHandler = (_cardId: string, _mergeObject: IMergeObject) => {
    let _next = JSON.stringify(_mergeObject);
    if (_next !== previousUpdate) {
      setPreviousUpdate(JSON.stringify(_mergeObject));
      setMergeObject(_mergeObject);
      setUpdateCardId(_cardId);
      let secondsPast = Date.now() / 1000 - initialTime;
      if (secondsPast > 4) {
        setShouldUpdate(true);
      }
    }
  };

  const resetShouldUpdate = () => {
    setShouldUpdate(false);
  };

  const deleteCard = (_cardId: string) => {
    const idx = cards.findIndex((cardItem) => cardItem.id === _cardId);
    if (idx > -1) {
      const _cards = [...cards];
      _cards.splice(idx, 1);
      setCards(_cards);
    }
  };

  // update the cards
  useMemo(() => {
    const idx = cards.findIndex((cardItem) => cardItem.id === cardId);
    const _cards = [...cards];
    _cards[idx] = {
      ..._cards[idx],
      ...mergeObject,
    };
    setCards(_cards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardId, mergeObject]);

  const addCardHandler = () => {
    const newCard = { ...defaultCard };
    newCard.id = Date.now().toString();
    const _cards = [...cards];
    _cards[_cards.length] = newCard;
    setCards(_cards);
  };

  const providerValue = {
    updateCardHandler,
    deleteCard,
  };

  const saveCards = () => {
    storage.save(cards);
  };

  return (
    <CardsContext.Provider value={providerValue}>
      <div ref={divRef}>
        {cards.map((cardItem, n) => (
          <Card cardData={cardItem} key={cardItem.id} num={n} />
        ))}
        <div className="app__bottom_links row padding__bottom_40">
          <div className="link2" onClick={addCardHandler}>
            + Add a calculator card
          </div>
          <SaveCards
            saveCardsHandler={saveCards}
            active={shouldUpdate}
            resetShouldUpdate={resetShouldUpdate}
          />
        </div>
      </div>
    </CardsContext.Provider>
  );
};

export default Cards;
