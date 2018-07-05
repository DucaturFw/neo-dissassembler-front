import {
  FETCH_TRANSACTION_INFO_START,
  FETCH_TRANSACTION_INFO_SUCCESS,
  FETCH_TRANSACTIONS_INFO_FAILED,
}
  from '../constant/transactioninfo-consts';

const initialState = {
  preloader: false,
  scriptinfo: [],
  disassemble: [],
};
export default function transactionInfoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRANSACTION_INFO_START:
      return { ...state, preloader: true };
    case FETCH_TRANSACTION_INFO_SUCCESS:
      return {
        ...state,
        preloader: false,
        scriptinfo: action.transactioninfo,
        disassemble: action.disassemble,
      };
    case FETCH_TRANSACTIONS_INFO_FAILED:
      return { ...state, preloader: false };
  }

  return state;
}
