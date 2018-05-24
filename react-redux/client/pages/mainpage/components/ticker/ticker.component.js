import React from 'react'
import {connect} from 'react-redux'
import {TickerView} from './ticker.view'
import {MainPageActionCreator} from '../../mainpage.action'
const mapDispatchToProps = (dispatch) => ({
	selectStock : (index) => dispatch(MainPageActionCreator.selectStock(index)),
});

const mapStateToProps = (state) => ({});

@connect(mapStateToProps,mapDispatchToProps)
export class Ticker extends React.Component {
    render(){
    	const {selectStock,stocks} = this.props;
	    return (
	        <div>
	        	<TickerView selectStock={selectStock} stocks={stocks}/>
	        </div>
	    )
    }
}
