import React from 'react'

const style = {
	margin : 5,
};

export const OrderButtons = ({handleBuyClick,handleSellClick}) => (
	<div>
		<button style={style} className='btn btn-info' onClick={handleBuyClick}>Buy</button>
		<button style={style} className='btn btn-warning' onClick={handleSellClick}>Sell</button>
	</div>	
);
