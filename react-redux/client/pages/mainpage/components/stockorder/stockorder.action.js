import {API_ACTION} from 'middlewares/ApiMiddleware'

export const StockOrderAction = {
    'TRANSACTION_SUCCESS':'TRANSACTION_SUCCESS',
    'TRANSACTION_FAILURE':'TRANSACTION_FAILURE',
    'TRANSACTION_REQUEST':'TRANSACTION_REQUEST',
    'TRANSACTION_RESET' : 'TRANSACTION_RESET'
}

export const StockOrderActionCreator = {

    resetOrder :() => ({
        type : StockOrderAction.TRANSACTION_RESET
    }),

    submitOrder : ({...transac,token},type) => {
        let options = {};
        options.method = 'POST';
        options.body = transac;
        const types = [ StockOrderAction.TRANSACTION_REQUEST,
                        StockOrderAction.TRANSACTION_SUCCESS,
                        StockOrderAction.TRANSACTION_FAILURE];
        const endpoint = type;
        return {
            [API_ACTION] : {
                endpoint,
                types,
                token,
                options
            }
        }
    }
}
