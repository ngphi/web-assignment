export const MainPageAction = {
	ADD_STOCK : 'ADD_STOCK',
    UPDATE_STOCK : 'UPDATE_STOCK',
    SELECT_STOCK : 'SELECT_STOCK',
    CLEAN_STOCK : 'CLEAN_STOCK',
    RESET_SELECTED_STOCK : 'RESET_SELECTED_STOCK',
}

export const MainPageActionCreator = {
    addStock: (stockName) => {
    	return {
    		type: MainPageAction.ADD_STOCK,
    		stockName,
    	}
    },
    updateStock: (updatedStock) => ({
    	type: MainPageAction.UPDATE_STOCK,
    	updatedStock,
    }),
    selectStock: (index) => ({
    	type: MainPageAction.SELECT_STOCK,
    	index,
    }),
    cleanStock : () => ({
        type : MainPageAction.CLEAN_STOCK,
    }),
    resetSelectedStock : () => ({
        type : MainPageAction.RESET_SELECTED_STOCK,
    })
}
