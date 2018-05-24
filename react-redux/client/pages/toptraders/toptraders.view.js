import React from 'react';
import cssModules from 'react-css-modules'
import style from './toptraders.style.scss'

import {Loading} from 'components'

export const TopTradersView = cssModules(({toptraders}) => {
	
	if(toptraders.length < 1){
		return <Loading />;
	}

	return	(<div styleName='toptraders'>
		<h1 styleName='toptraders__title'>Top Traders</h1>
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Balance</th>
				</tr>
			</thead>
			<tbody>
				{
					toptraders.map((trader,index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{trader.name}</td>
							<td>{trader.balance.toFixed(2)}</td>
						</tr>
					))
				}
			</tbody>		
		</table>
	</div>)
},style,{errorWhenNotFound : false});