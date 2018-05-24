import React from 'react'
import cssModules from 'react-css-modules'
import style from './ticker.style.scss'

import {StockRow} from './stockrow'
import {Loading} from 'components'


export const TickerView = cssModules(({selectStock,stocks}) => {

	const stockRows = stocks.map((stock,index) => 
							<StockRow selectStock={() => selectStock(index)} key={index} stock={stock} />);

	return (
		<div styleName='ticker'>
			{
				stocks.length < 1 ? <Loading /> : (
						<table className="table table-bordered text-center">
				        	<tbody>
				            	{stockRows}
				            </tbody>
				    	</table>)
			}
	    </div>);
},style,{errorWhenNotFound : false});