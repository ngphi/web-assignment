import {TopTradersAction} from './toptraders.action'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'

export const toptraders = (state = [],action) => {
	switch(action.type){
		case TopTradersAction.TOP_TRADER_SUCCESS : const sortedTopTraders = reverse(sortBy(action.data,['balance']));
													return sortedTopTraders;
		case TopTradersAction.TOP_TRADER_FAILURE : return [];
		default : return state;
	}
}