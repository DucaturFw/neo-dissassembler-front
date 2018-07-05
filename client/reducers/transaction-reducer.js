import {
  FETCH_TRANSACTIONS_START,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILED,
}
  from '../constant/transaction-consts';

const initialState = {
  preloader: false,
};
export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS_START:
      return { ...state, preloader: true };
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state, preloader: false,
      };
    case FETCH_TRANSACTIONS_FAILED:
      return { ...state, preloader: false };
  }

  return state;
}
