import { combineReducers } from 'redux';
import transaction from '../reducers/transaction-reducer';
import transactioninfo from '../reducers/transactioninfo-reducer';

export const rootReducer = combineReducers({
  transaction,
  transactioninfo
});
