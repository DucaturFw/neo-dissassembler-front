import axios from 'axios';
import {
  FETCH_TRANSACTION_INFO_START,
  FETCH_TRANSACTION_INFO_SUCCESS,
  FETCH_TRANSACTIONS_INFO_FAILED
} from '../constant/transactioninfo-consts';
import { disassemble } from 'neo-script-parser';

export function fetchTransactionsInfo(idtransaction) {
  return dispatch => {
    dispatch({ type: FETCH_TRANSACTION_INFO_START });

    axios
      .get(`https://neoscan-testnet.io/api/test_net/v1/get_transaction/${idtransaction}?verbose=1`)
      .then(res => {
        console.log(res.data);
        console.log(disassemble(res.data.script));
        dispatch({
          type: FETCH_TRANSACTION_INFO_SUCCESS,
          transactioninfo: res.data,
          disassemble: disassemble(res.data.script)
        });
      })
      .catch(err => dispatch({ FETCH_TRANSACTIONS_INFO_FAILED }));
  };
}
