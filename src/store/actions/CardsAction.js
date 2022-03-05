import * as types from "../types/CardTypes";

export const CardsAction = {
  addNewCard: (cardData) => {
    return (dispatch) => {
      return dispatch({
        type: types.ADD_NEW_CARD,
        payload: cardData,
      });
    };
  },

  sortCards: () => {
    return (dispatch) => {
      return dispatch({
        type: types.SORT_CARDS,
      });
    };
  },

  removeCard: (cardId) => {
    return (dispatch) => {
      return dispatch({
        type: types.REMOVE_CARD,
        payload: cardId,
      });
    };
  },
};
