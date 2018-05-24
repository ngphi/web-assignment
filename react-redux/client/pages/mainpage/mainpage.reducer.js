import {MainPageAction} from './mainpage.action'
export {stockorder} from './components/stockorder'

export const stocks = (state = [],action) => {
	switch(action.type){
		case MainPageAction.ADD_STOCK : const stockName = action.stockName;
										const newStock = {name : stockName,price : 0, change : 0};
										return [...state,newStock];
		case MainPageAction.UPDATE_STOCK :  const updatedStock = action.updatedStock;

											return state.map(stock => {
												if(stock.name === updatedStock.name){
													return updatedStock;
												}
												return stock;
											});
		case MainPageAction.CLEAN_STOCK : return [];
   		default : return state;
	}
}

export const selectedIndex = (state = 0,action) => {
	switch(action.type){
		case MainPageAction.SELECT_STOCK : return action.index;
		case MainPageAction.RESET_SELECTED_STOCK : return 0;
		default : return state;
	}
}

