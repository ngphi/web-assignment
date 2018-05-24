import React from 'react'
import cssModules from 'react-css-modules'
import style from './stockrow.style.scss'

import {renderWhenAuthenticated} from 'components/AuthenticatedHOCs'
import {StockOrder} from '../../stockorder'

const StockOrderRow = renderWhenAuthenticated((props) => (<td style={{width: 150}}><StockOrder {...props} /></td>));

export const StockRow = cssModules(({stock,selectStock}) => {
	return (
		<tr styleName='stockrow' onClick={selectStock}>
			<td styleName='stockrow__detail'>{stock.name}</td>
			<td styleName='stockrow__detail'>{stock.price}</td>
			<td styleName={(stock.change > 0 ? 'stockrow__change--increase' : 'stockrow__change--decrease')} >{stock.change}</td>
			<StockOrderRow symbol={stock.name} />
		</tr>
	)
},style,{errorWhenNotFound : false});
