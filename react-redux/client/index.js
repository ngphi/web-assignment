require("./assets/styles/app.scss")
import React from 'react'
import {render} from "react-dom"
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import {AppRoute} from './routes'
import {AppReducer} from './reducers'
import {apiMiddleware} from './middlewares'
import thunk from 'redux-thunk'

const initStore = (reducers, state) => {
    return createStore(reducers, state,applyMiddleware(thunk,apiMiddleware))
}

//const store = initStore(AppReducer, window.__INITIAL_STATE__)
const store = initStore(AppReducer, {})

//store.subscribe(() => console.log(store.getState()));

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={AppRoute}/>
    </Provider>
    , document.getElementById('app')
)


