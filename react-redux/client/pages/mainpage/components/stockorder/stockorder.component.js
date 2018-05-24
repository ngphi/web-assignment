import React from 'react'
import {connect} from 'react-redux'
import {StockOrderActionCreator} from './stockorder.action'

import {OrderButtons} from './components/OrderButtons'
import {OrderForm} from './components/OrderForm'
import {Modal} from 'react-bootstrap'
 

const mapStateToProps = (state) => ({
	token : state.auth.token,
	user: state.auth.user,
	stockorder : state.stockorder,
});

const mapDispatchToProps = (dispatch) => ({
	submitOrder : (...args) => dispatch(StockOrderActionCreator.submitOrder(...args)),
	resetOrder : () => dispatch(StockOrderActionCreator.resetOrder()),
});

@connect(mapStateToProps,mapDispatchToProps)
export class StockOrder extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			type : null,
			symbol : props.symbol || null,
		};
	}

	handleSellClick(event){
		event.stopPropagation();
		this.setState({type: 'sell'});
	}

	handleBuyClick(event){
		event.stopPropagation();
		this.setState({type: 'buy'});
	}

	handleSubmitOrder(quantity){
		const {type,symbol} = this.state;
		const {token,user,submitOrder} = this.props;
		const transac = {code : symbol,quantity,token,user};
		return submitOrder(transac,type);
	}

	closeOrderForm(){
		if(this.state.type !== null){
			this.props.resetOrder();
 			this.setState({type: null});
		}
	}

	render(){
		const {type,symbol,quantity} = this.state;
		return (
			<div>
				<OrderButtons handleBuyClick={::this.handleBuyClick} 
							handleSellClick={::this.handleSellClick} />
				<OrderForm submitOrder={::this.handleSubmitOrder} 
								type={type}
								symbol={symbol}
								stockorder={this.props.stockorder}
								closeOrderForm={::this.closeOrderForm} />
			</div>
		);
	}

}