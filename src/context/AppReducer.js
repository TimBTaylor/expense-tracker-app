import { ACTIONS } from "./GlobalState";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_TRANSACTION:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case ACTIONS.ERROR_TRANSACTION:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
