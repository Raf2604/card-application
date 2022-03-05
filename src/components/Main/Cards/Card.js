import React from "react";
import { useDispatch } from "react-redux";
import { CardsAction } from "../../../store/actions/CardsAction";
import "./styles.scss";

const Card = ({ card }) => {
  const dispatch = useDispatch();

  const removeCard = () => {
    dispatch(CardsAction.removeCard(card.id));
  };

  return (
    <div className="card-block-grid">
      <div className="card-block">
        <button onClick={removeCard}>X</button>
        <div className="card-block-body">{card.number}</div>
      </div>
    </div>
  );
};

export default Card;
