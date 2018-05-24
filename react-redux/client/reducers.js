import {combineReducers} from 'redux'
import {stocks,selectedIndex,stockorder,auth,toptraders} from './pages'

export const AppReducer = combineReducers({
    stocks,
    selectedIndex,
    auth,
    toptraders,
    stockorder
})
