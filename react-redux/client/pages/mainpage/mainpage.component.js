import React from 'react'
import {connect} from 'react-redux'

import StockSocket from 'core/StockSocket'
import {MainPageActionCreator} from './mainpage.action';
import {MainPageView} from './mainpage.view';

const mapStateToProps = state => ({
	stocks : state.stocks,
	selectedIndex : state.selectedIndex,
})

const mapDispatchToProps = dispatch => ({
	addStock : (stockName) => dispatch(MainPageActionCreator.addStock(stockName)),
	updateStock : (data) => {
		const updatedStock = {
			name : data.code,
			price : data.value.price,
			change : data.value.change,
		};
		dispatch(MainPageActionCreator.updateStock(updatedStock))
	},
	cleanStock : () => dispatch(MainPageActionCreator.cleanStock()),
	resetSelectedStock : () => dispatch(MainPageActionCreator.resetSelectedStock())
})

@connect(mapStateToProps,mapDispatchToProps)
export class MainPage extends React.Component {

	componentDidMount(){

		StockSocket.start();

		StockSocket.onRegister(this.props.addStock);

		StockSocket.onChange(this.props.updateStock);
	}

	componentWillUnmount(){
		StockSocket.close();
		this.props.cleanStock();
		this.props.resetSelectedStock();
	}

    render() {
    	const { stocks,
    			selectedIndex} = this.props;

        return (
        	<MainPageView 
        		stocks={stocks} 
        		selectedIndex={selectedIndex} />
        );	
    }
}
