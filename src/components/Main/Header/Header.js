import React from "react";
import { useDispatch } from "react-redux";
import { CardsAction } from "../../../store/actions/CardsAction";
import { idGenerator } from "../../../helpers/global";
import "./styles.scss";

const Header = () => {
  const dispatch = useDispatch();

  const addCard = () => {
    const newCard = {
      id: idGenerator(),
      number: Math.floor(Math.random() * 1000),
    };
    dispatch(CardsAction.addNewCard(newCard));
  };

  const sortCards = () => {
    dispatch(CardsAction.sortCards());
  };

  return (
    <header>
      <button className="add-card-btn" onClick={addCard}>
        Add Card
      </button>
      <button className="sort-cards-btn" onClick={sortCards}>
        Sort Cards
      </button>
    </header>
  );
};

export default Header;
