import React from 'react'
import cssModules from 'react-css-modules'
import style from './mainpage.style.scss'
//components
import {Loading} from 'components'
import {Ticker} from './components/ticker'
import {Chart} from './components/chart'
import {Account} from './components/account'

export const MainPageView = cssModules(({stocks,selectedIndex}) => {
	if(stocks.length < 1){
		return <Loading />;
	}
    return (
        <div styleName='mainpage'>
            <div>
            <Ticker stocks={stocks} />
                <Chart stock={stocks[selectedIndex]} />
            </div>
            <Account />
        </div>
    )
},style,{errorWhenNotFound: false});
