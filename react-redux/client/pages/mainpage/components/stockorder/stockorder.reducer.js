import {StockOrderAction} from './stockorder.action'

const initialState = {
	ordering : false,
	ordered : false,
	error : null,
};

export const stockorder = (state = {},action) => {
	switch(action.type){
		case StockOrderAction.TRANSACTION_REQUEST : return {ordering: true,error : null,ordered: false};
		case StockOrderAction.TRANSACTION_SUCCESS : return {ordered : true,error : null,ordering : false};
		case StockOrderAction.TRANSACTION_FAILURE : return {ordered : false,ordering : false, error : action.error};
		case StockOrderAction.TRANSACTION_RESET : return initialState;
		default : return state;
	}
}