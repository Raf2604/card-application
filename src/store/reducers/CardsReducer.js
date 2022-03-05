import * as types from "../types/CardTypes";

const initialState = {
  cards: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_NEW_CARD:
      return {
        ...state,
        cards: [...state.cards, payload],
      };
    case types.SORT_CARDS:
      const sortedCards = [...state.cards].sort((firstCard, secondCard) => {
        return firstCard.number - secondCard.number;
      });
      return {
        ...state,
        cards: sortedCards,
      };
    case types.REMOVE_CARD:
      const afterRemove = [...state.cards].filter(
        (card) => card.id !== payload
      );
      return {
        ...state,
        cards: afterRemove,
      };
    default:
      return state;
  }
};
