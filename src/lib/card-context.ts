import React from "react";

interface ICardContext {
  updateCardHandler: (cardId: string, mergeObject: any) => void;
  deleteCard: (cardId: string) => void;
}

const initialValues: ICardContext = {
  updateCardHandler: (cardId: string, mergeObject: any) => {},
  deleteCard: (cardId: string) => {},
};

const CardContext = React.createContext<ICardContext>(initialValues);

export default CardContext;
