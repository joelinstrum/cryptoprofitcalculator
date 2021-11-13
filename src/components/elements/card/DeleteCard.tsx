import React from "react";
import CardsContext from "../../../lib/card-context";

interface DeleteCardProps {
  cardId: string;
  enabled: boolean;
}
const DeleteCard: React.FC<DeleteCardProps> = ({ cardId, enabled }) => {
  const className = enabled ? "card__delete_enabled" : "card__delete_disabled";
  const { deleteCard } = React.useContext(CardsContext);

  return (
    <div
      className={`card__delete ${className}`}
      onClick={() => deleteCard(cardId)}
    >
      <span className="card__delete_text">&times;</span>
    </div>
  );
};

export default DeleteCard;
