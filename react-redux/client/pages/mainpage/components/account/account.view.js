import React from 'react';
import cssModules from 'react-css-modules'
import style from './account.style.scss'
import {StockOrder} from 'pages/mainpage/components/stockorder'

const StockOrderRow = (props) => 
					(<td style={{width: 150}}><StockOrder {...props} /></td>);


export const AccountView = cssModules(({user}) => (
	<div styleName='account'>
		<div styleName='account__balance'>
			<div>
				<h4>Balance</h4>
			</div>
			<div styleName='account__balance-number'>
				$ {user.balance.toFixed(2)}
			</div>
		</div>
		<div styleName='account__asset'>
			<h4>Shares</h4>
			<table className='table table-bordered'>
				<thead>
					<tr>
						<th>#</th>
						<th>Stock Name</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
				{user.stocks.map((stock,index) => 
							(<tr key={index + Date.now()}>
								<td>{index + 1}</td>
								<td>{stock.code}</td>
								<td>{stock.quantity}</td>
								<StockOrderRow symbol={stock.code} />
							</tr>))}			
				</tbody>
			</table>
		</div>
	</div>
),style,{errorWhenNotFound : false});