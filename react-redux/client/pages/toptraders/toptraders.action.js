import {API_ACTION} from 'middlewares/ApiMiddleware'

export const TopTradersAction = {
   'TOP_TRADER_SUCCESS' : 'TOP_TRADER_SUCCESS',
   'TOP_TRADER_FAILURE':'TOP_TRADER_FAILURE'

}

export const TopTradersActionCreator = {
   fetchTopTraders : (token) => {
      return {
               [API_ACTION] : {
                  endpoint: 'users',
                  types : [null,
                           TopTradersAction.TOP_TRADER_SUCCESS,
                           TopTradersAction.TOP_TRADER_FAILURE],
                  token
               }
            };
   }
}
