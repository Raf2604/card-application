import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./styles.scss";

const Cards = () => {
  const cards = useSelector((store) => store.CardsReducer.cards);
  const [isScrollable, setIsScrollable] = useState(false);
  const cardContainerRef = useRef();

  //Toggle scrollball style only when the quantity of cards is more than the height of the Cards component.
  //If default set `overflow-y: scroll` parameter - scrollbar always visible even when no scrolling.
  //250px is height of one Card, cards-container has 100px padding.
  useEffect(() => {
    console.log(cardContainerRef.current.clientHeight);
    const containerHeigth = cardContainerRef.current.clientHeight - 100;
    const drawnCardsHeigth =
      cards.length % 2 === 0
        ? (cards.length / 2) * 250
        : ((cards.length + 1) / 2) * 250;
    setIsScrollable(containerHeigth - drawnCardsHeigth < 0 ? true : false);
  }, [cards, cardContainerRef]);

  return (
    <div
      ref={cardContainerRef}
      className={`cards-container ${isScrollable ? "scroll-conatiner" : ""}`}
    >
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

export default Cards;
