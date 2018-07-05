import {
  FETCH_TRANSACTIONS_START,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILED,
}
  from '../constant/transaction-consts';

export function fetchTransactions() {
  return (dispatch) => {
    dispatch({ type: FETCH_TRANSACTIONS_START });
    dispatch({ type: FETCH_TRANSACTIONS_SUCCESS });
    // dispatch({type:FETCH_TRANSACTIONS_FAILED});
  };
}
