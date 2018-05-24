import React from 'react'
import {createChart} from './HighStock'
import {Loading} from 'components'

const style = {
	height: 400,
	minWidth: 310,
};

function getTitle(name){
	return `${name} Real Time Price`;
}

export class Chart extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			currentStock : props.stock || {},
			chart : null,
		}
	}

	componentDidMount(){
		const {stock} = this.props;
		const chart = createChart(this.chartContainer,
								stock.name,
								getTitle(stock.name));
		this.setState({chart});
	}

	componentWillReceiveProps(nextProps){
		const {currentStock} = this.state;
		const nextStock = nextProps.stock;

		if(this.isDifferentStock(currentStock,nextStock)){
			const {chart} = this.state;

			const newChart = createChart(this.chartContainer,
										nextStock.name,
										getTitle(nextStock.name));

			return this.setState({currentStock: nextStock,chart: newChart});
		}

		if(nextStock.price > 0 && nextStock.price !== currentStock.price){
			this.setState({currentStock: nextStock},() => {
				const {chart,currentStock} = this.state;
				return chart.addNewPoint(currentStock.price);
			});
		}
	}

	isDifferentStock(currentStock,newStock){
		return currentStock.name !== newStock.name;
	}

	shouldComponentUpdate(nextProps,nextStates){
		return this.isDifferentStock(this.state.currentStock,nextProps.stock);
	}

	render(){
		return (
			<div>
				<div style={style} ref={elem => this.chartContainer = elem} />
				
			</div>
		);
	}

}

